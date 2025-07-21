export function ExperienceCard({ title, company,  location, date, description }) {
    return (
        <div className="droplet p-2 mb-3">
            <h3 className="text-lg font-bold mb-1">{company} - {title}</h3>
            <h5 className="opacity-65">{date}, {location}</h5>
            <p>{description}</p>
        </div> 
    )
}

export function ProjectCardPreview({ name, course, date, summary }) {
    return (
        <div className="droplet p-2 mb-3">
            <h3 className="text-lg mb-1"><strong>{name}</strong>,  {course ? course : ""}</h3>
            <h5 className="opacity-65">{date}</h5>
            <p>{summary}</p>
        </div>
    )
}

export function AwardCard({ title, awarder, team}) {
    return (
        <div className="droplet p-2 mb-3">
            <h3 className="text-lg font-bold mb-1">{title}</h3>
            <p>Awarded to {team ? team : "me" } by {awarder}</p>
        </div>
    )
}