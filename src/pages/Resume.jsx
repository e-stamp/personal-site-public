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
    const [skills, setSkills] = useState(null);
    const [education, setEducation] = useState(null);
    const [workExperience, setWorkExperience] = useState(null);
    const [projects, setProjects] = useState(null);

    const fetchResume = async () => {
        try {
            const data = await api.information.getResumeInfo();
            setSkills(data[0]);
            setEducation(data[1]);
            setWorkExperience(data[2]);
            setProjects(data[3]);
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

            {/* Name and Profile */}
            {!isInfoLoading && !isLoading &&
                <>
                    <h3 className="text-2xl font-semibold mt-3 mb-1">{info.first_name} {info.last_name} ({info.pronouns})</h3>
                    <p>{info.first_name} is a third year Computer Science student at <strong>{education[0].institution}</strong>, 
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
                    <div className="mt-4 mb-6 flex flex-row flex-wrap gap-4 items-center justify-center">
                        {skills.map((skill, index) => (
                            <span 
                                key={index} 
                                className="shrink-0 rounded-2xl bg-canopy p-3 
                                           shadow-md shadow-dark-green text-shadow-sm text-shadow-timber 
                                           border-b-2 border-r-1 border-deep-green 
                                           bg-[url(/leaf_vein.png)] bg-blend-soft-light"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>

                    {/* Education */}
                    <div className="p-3 mb-6 rounded-2xl bg-canopy
                                    shadow-lg shadow-dark-green text-shadow-sm text-shadow-timber 
                                    border-b-3 border-r-2 border-deep-green 
                                    bg-[url(/leaf_vein.png)] bg-blend-soft-light"
                    >
                        <h2 className="text-2xl font-bold mb-2">Education</h2>
                        <div className="p-2 rounded-2xl bg-moss mb-3">
                            <p className="text-lg"><strong>{education[0].institution}</strong>, {education[0].location}</p>
                            <p>{education[0].degree}</p>
                            <p className="opacity-65">{education[0].date}</p>
                            <p>Expected Graduation: <strong>{education[0].grad}</strong></p>
                            <p>Next available for Co-op in: <strong>{education[0].next_available_for_coop}</strong></p>
                            <div className="flex flex-row items-center justify-center">
                                <p>Courses: 
                                    {education[0].example_courses.map((course, index) => (
                                        <span key={index}> {course},</span>
                                    ))}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Experience */}
                    <div className="p-3 mb-6 rounded-2xl bg-canopy
                                    shadow-lg shadow-dark-green text-shadow-sm text-shadow-timber 
                                    border-b-3 border-r-2 border-deep-green 
                                    bg-[url(/leaf_vein.png)] bg-blend-soft-light"
                    >
                        <h2 className="text-2xl font-bold mb-2">Experience</h2>
                        {workExperience.filter(experience => experience.relevant).map((experience, index) => (
                            <ExperienceCard key={index} {...experience} />           
                        ))}
                        <button className="mb-3" onClick={() => setNonRelevant(!nonRelevant)}>
                            {nonRelevant ? "Collapse Other Work Experience" : "Show Other Work Experience"}
                        </button>
                        {nonRelevant && workExperience.filter(experience => !experience.relevant).map((experience, index) => (
                            <ExperienceCard key={index} {...experience} />
                        ))}
                    </div>
                    <div className="p-3 mb-6 rounded-2xl bg-canopy
                                    shadow-lg shadow-dark-green text-shadow-sm text-shadow-timber 
                                    border-b-3 border-r-2 border-deep-green 
                                    bg-[url(/leaf_vein.png)] bg-blend-soft-light"
                    >
                        <h2 className="text-2xl font-bold mb-2">Projects</h2>
                        <h3 className="text-l font-bold mb-2">Academic</h3>
                        {projects.filter(project => project.type == "academic").filter(project => !project.hidden).map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                        <h3 className="text-l font-bold mb-2">Personal</h3>
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