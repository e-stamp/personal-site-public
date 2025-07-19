import React, { useState, useEffect } from 'react';
import { ExperienceCard, ProjectCard } from '../components/resume/ResumeCards.jsx';
import useSharedInfoState from '../hooks/useSharedInfoState';
import api from '../services/index';

/**
 * Resume Page witch formats and dispalys resume information
 * 
 * @page Resume
 * 
 * @returns {JSX.Element} The rendered Resume page component.
 * - Displays personal information, skills, education, work experience, and projects.
 */
export default function Resume() {
    const [nonRelevant, setNonRelevant] = useState(false);
    const [isLoading, setIsLoading] = useState(true)
    const {info, isInfoLoading} = useSharedInfoState();
    let skills, education, workExperience, projects = [];

    const fetchResume = async () => {
        try {
            const data = await api.information.getResumeInfo();
            skills = data[0];
            education = data[1];
            workExperience = data[2];
            projects = data[3];
            console.log(skills);
            console.log(education);
            console.log(workExperience);
            console.log(projects);
        } catch (err) {
            console.error("Error fetching resume");
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchResume();
    }, [])

    return (
        <div>
            <h1>Resume page</h1>

            {/* Name and Profile */}
            <h2 className="text-2xl font-bold mb-2">Profile</h2>
            {!isInfoLoading && !isLoading &&
                <>
                    <h3 className="text-xl font-semibold mb-1">{info.first_name} {info.last_name} ({info.pronouns})</h3>
                    <p>{info.first_name} is a third year Computer Science student at {education.institution}, 
                        and {(info.pronouns == "She/Her") ? "she" : ""} is expected to graduate in 2027. 
                        Currently {(info.pronouns == "She/Her") ? "she has" : "they have"} done work with software development, web development, database management, artificial intelligence, 
                        and 3D modeling. {(info.pronouns == "She/Her") ? "She has" : "They have"} knowledge on software project work as a team, 
                        the software development lifecycle, and the Scrum process.
                    </p>
                </>
            }
            
            {!isLoading &&
                <>
                    {/* Skills */}
                    <div className="mb-6 flex flex-row gap-4 items-center justify-center">
                        {skills.map((skill, index) => (
                            <span key={index} className="rounded-2xl bg-gray-500 p-3">{skill}</span>
                        ))}
                    </div>

                    {/* Education */}
                        <div className="mb-6 rounded-2xl bg-gray-500">
                        <h2 className="text-2xl font-bold mb-2">Education</h2>
                        <p className="text-l"><strong>{education[0].institution}</strong>, {education[0].location}, {education[0].degree}</p>
                        <p className="opacity-65">{education[0].date}</p>
                        <p>Expected Graduation: {education[0].grad}</p>
                        <p>Next available for Co-op in: {education[0].next_available_for_coop}</p>
                        <ul>
                            {education[0].example_courses.map((course, index) => (
                                <ol key={index}><span className="bg-gray-500">{course}, </span></ol>
                            ))}
                        </ul>
                    </div>

                    {/* Experience */}
                    <div className="mb-6 rounded-2xl bg-gray-500">
                        <h2 className="text-2xl font-bold mb-2">Experience</h2>
                        {workExperience.filter(experience => experience.relevant).map((experience, index) => (
                            <ExperienceCard key={index} {...experience} />           
                        ))}
                        <button className="mb-3" onClick={() => setNonRelevant(!nonRelevant)}>
                            {nonRelevant ? "Collapse Non-Relevant Experience" : "Show Non-Relevant Experience"}
                        </button>
                        {nonRelevant && workExperience.filter(experience => !experience.relevant).map((experience, index) => (
                            <ExperienceCard key={index} {...experience} />
                        ))}
                    </div>
                    <div className="mb-6 rounded-2xl bg-gray-500">
                        <h2 className="text-2xl font-bold mb-2">Projects</h2>
                        <h3 className="text-l font-bold mb-2">Academic</h3>
                        {projects.filter(project => project.type == "academic").filter(project => !project.hidden).map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                        <h3>Personal</h3>
                        {projects.filter(project => project.type == "personal").filter(project => !project.hidden).map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </div>

                    {/* Additional Information */}
                </>
            }
        </div>
    )
}