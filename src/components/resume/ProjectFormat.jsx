export default function ProjectFormat({ project }) {
    return (
        <div className="experience mb-3">
            <h3 className="text-l font-bold mb-2">{project.name}  {project.course ? project.course : ""}</h3>
            <h5 className="opacity-65">{project.date}</h5>
            <ul>
                {project.notes.map((note, index) => (
                    <li key={index} className="bg-gray-500">{note}</li>
                ))}
            </ul>
        </div>
    )
}