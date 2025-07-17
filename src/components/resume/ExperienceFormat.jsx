export default function ExperienceFormat({ experience }) {
    return (
        <div className="experience mb-3">
            <h3 className="text-l font-bold mb-2">{experience.company} - {experience.title}</h3>
            <h5 className="opacity-65">{experience.date}, {experience.location}</h5>
            <p>{experience.description}</p>
        </div>
    )
}