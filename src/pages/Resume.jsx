import React, { useState, useEffect } from 'react';
import { personalInformation, skills, education, workExperience, projects  } from "../components/Information.jsx";
import ExperienceFormat from '../components/resume/ExperienceFormat.jsx';
import ProjectFormat from '../components/resume/ProjectFormat.jsx';


export default function Resume() {
    const [nonRelevant, setNonRelevant] = useState(false);
    const [lived, setLived] = useState(true);
    const [info, setInfo] = useState(personalInformation[0]);

    useEffect(() => {
        setInfo(lived ? personalInformation[0] : personalInformation[1]);
    }, [lived]);

    return (
        <div>
            <h1>Resume page</h1>

            {/* Name and Profile */}
            <h2 className="text-2xl font-bold mb-2">Profile</h2>
            <h3 className="text-xl font-semibold mb-1">{info.first_name} {info.last_name}</h3>
            <p>{info.first_name} is a second year Computer Science student at {education[0].institution}, 
                and {(info.pronouns == "She/Her") ? "she" : ""} is expected to graduate in 2027. 
                Currently {(info.pronouns == "She/Her") ? "her" : "their"} focus is in software development, 
                but {(info.pronouns == "She/Her") ? "she has" : "they have"} also done work with web development, database management, 
                and 3D modeling. {(info.pronouns == "She/Her") ? "She has" : "They have"} knowledge on software project work as a team, 
                the software development lifecycle, and the Scrum process.</p>

            {/* Skills */}
            <div className="flex flex-row gap-4 items-center justify-center">
                {skills.map((skill, index) => (
                    <span key={index} className="bg-gray-500">{skill}</span>
                ))}
            </div>

            {/* Education */}
            <h2 className="text-2xl font-bold mb-2">Education</h2>
            <p className="text-l"><strong>{education[0].institution}</strong>, {education[0].location}, {education[0].degree}</p>
            <p className="opacity-65">{education[0].date}</p>
            <p>Expected Graduation: {education[0].grad}</p>
            <p>Next available for Co-op in: {education[0].next_available_for_coop}</p>
            <ul>
                {education[0].example_courses.map((course, index) => (
                    <ol><span key={index} className="bg-gray-500">{course}, </span></ol>
                ))}
            </ul>

            {/* Experience */}
            <h2 className="text-2xl font-bold mb-2">Experience</h2>
            {workExperience.filter(experience => experience.relevant).map((experience, index) => (
                <ExperienceFormat key={index} experience={experience} />
            ))}
            <button className="mb-3" onClick={() => setNonRelevant(!nonRelevant)}>
                {nonRelevant ? "Collapse Non-Relevant Experience" : "Show Non-Relevant Experience"}
            </button>
            {nonRelevant && workExperience.filter(experience => !experience.relevant).map((experience, index) => (
                <ExperienceFormat key={index} experience={experience} />
            ))}
            <h2>Projects</h2>
            <h3>Academic</h3>
            {projects.filter(project => project.type == "academic").filter(project => !project.hidden).map((project, index) => (
                <ProjectFormat key={index} project={project} />
            ))}
            <h3>Personal</h3>
            {projects.filter(project => project.type == "personal").filter(project => !project.hidden).map((project, index) => (
                <ProjectFormat key={index} project={project} />
            ))}

            {/* Additional Information */}
        </div>
    )
}