export function ExperienceCard({ title, company,  location, date, description }) {
    return (
        <div className="rounded-2xl bg-gray-700 mb-3">
            <h3 className="text-l font-bold mb-2">{company} - {title}</h3>
            <h5 className="opacity-65">{date}, {location}</h5>
            <p>{description}</p>
        </div> 
    )
}

export function ProjectCard({ name, course, date, notes }) {
    return (
        <div className="rounded-2xl bg-gray-700 mb-3">
            <h3 className="text-l font-bold mb-2">{name}  {course ? course : ""}</h3>
            <h5 className="opacity-65">{date}</h5>
            <ul>
                {notes.map((note, index) => (
                    <li key={index} className="bg-gray-500">{note}</li>
                ))}
            </ul>
        </div>
    )
}