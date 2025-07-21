export function ProjectCardFull({ name, course, date, notes }) {
    return (
        <div className="leaf p-2 mb-3">
            <h3 className="text-lg font-bold mb-1">{name}  {course ? course : ""}</h3>
            <h5 className="opacity-65">{date}</h5>
            <ul className="droplet">
                {notes.map((note, index) => (
                    <li key={index}>• {note}</li>
                ))}
            </ul>
        </div>
    )
}