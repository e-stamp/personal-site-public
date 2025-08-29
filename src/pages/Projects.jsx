import React, { useState, useEffect, useRef } from 'react';
import { ProjectCardFull } from '../components/projects/projectsCards.jsx';
import api from '../services/index';

/**
 * Projects Page witch formats and dispalys information on projects
 * 
 * @page Projects
 * 
 * @returns {JSX.Element} The rendered Projects page component.
 * - Displays information on projects, including:
 *   - Name
 *   - Date
 *   - whether the project was personal or academic
 *   - notes / a description on the project
 */
export default function Projects() {
    const [isLoading, setIsLoading] = useState(true);
    const [projects, setProjects] = useState(null);
    const scrollToRef = useRef(null);
    const scrollToProject = localStorage.getItem('selectedProject') || null;

    const fetchProjects = async () => {
        try {
            const data = await api.information.getProjectInfo();
            setProjects(data);
        } catch (err) {
            console.error("Error fetching projects");
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchProjects();
    }, [])

    useEffect(() => {
        if (scrollToRef.current) {
            scrollToRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            localStorage.removeItem('selectedProject');
        }
    }, [isLoading])

    return (
        <div>
            {!isLoading &&
                <>
                    {/* Projects */}
                    <div className="p-3 mb-6">
                        <h2 className="text-2xl font-bold mb-2">Projects</h2>

                        {/* Personal Projects */}
                        <h3 className="text-l font-bold mb-2">Personal</h3>
                        {projects.filter(project => project.type == "personal").filter(project => !project.hidden).map((project, index) => (
                            <div 
                                ref={JSON.stringify(project.name) === scrollToProject ? scrollToRef : null } 
                                key={index}
                            >
                                <ProjectCardFull {...project} />
                            </div>
                        ))}

                        {/* Academic Projects */}
                        <h3 className="text-l font-bold mb-2">Academic</h3>
                        {projects.filter(project => project.type == "academic").filter(project => !project.hidden).map((project, index) => (
                            <div 
                                ref={JSON.stringify(project.name) === scrollToProject ? scrollToRef : null } 
                                key={index}
                            >
                                <ProjectCardFull {...project} />
                            </div>
                        ))}
                        
                    </div>
                </>
            }
        </div>
    )
}