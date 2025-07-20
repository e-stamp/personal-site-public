export function ExperienceCard({ title, company,  location, date, description }) {
    return (
        <div className="p-2 rounded-2xl bg-moss mb-3">
            <h3 className="text-lg font-bold mb-1">{company} - {title}</h3>
            <h5 className="opacity-65">{date}, {location}</h5>
            <p>{description}</p>
        </div> 
    )
}

export function ProjectCard({ name, course, date, notes }) {
    return (
        <div className="p-2 rounded-2xl bg-moss mb-3">
            <h3 className="text-lg font-bold mb-1">{name}  {course ? course : ""}</h3>
            <h5 className="opacity-65">{date}</h5>
            <ul>
                {notes.map((note, index) => (
                    <li key={index}>• {note}</li>
                ))}
            </ul>
        </div>
    )
}

export function AwardCard({ title, awarder, team}) {
    return (
        <div className="p-2 rounded-2xl bg-moss mb-3">
            <h3 className="text-lg font-bold mb-1">{title}</h3>
            <p>Awarded to {team ? team : "me" } by {awarder}</p>
        </div>
    )
}