/*
 * This file contains various arrays of objects filled with information
 * that is used to populate the resume.
 */

/*
 * Contains personal information for resume
 * is an array of two objects used to customize the information displayed on the resume
 * each object has the following properties:
 * - version: string
 * - first_name: string
 * - last_name: string
 * - pronouns: string
 * - address: string
 * - phone: string
 * - personal_email: string
 * - school_email: string
 * - github: string
 * - linkedin: string
 */
export const personalInformation = [
    {
        version: "lived",
        first_name: "Eva",
        last_name: "Stamp",
        pronouns: "She/Her",
        address: "81 Forestside Crescent, Halifax, NS, B3M 1M5",
        phone: "902-999-7466",
        personal_email: "oastamp08@gmail.com",
        school_email: "OStamp@dal.ca",
        github: <a href="https://github.com/ol-stamp">github</a>,
        linkedin: <a href="https://www.linkedin.com/in/oliver-stamp-87617232a">linkedin</a>
    },
    {
        version: "legal",
        first_name: "Oliver",
        last_name: "Stamp",
        pronuns: "they/them",
        address: "81 Forestside Crescent, Halifax, NS, B3M 1M5",
        phone: "902-999-7466",
        personal_email: "oastamp08@gmail.com",
        school_email: "OStamp@dal.ca",
        github: <a href="https://github.com/ol-stamp">github</a>,
        linkedin: <a href="https://www.linkedin.com/in/oliver-stamp-87617232a">linkedin</a>
    }
];


/*
 * Contains skills for resume
 * the skills object is sorted into the following categories:
 * - Frontend Development
 * - Backend Development
 * - Other Skills
 */
export const skills = [
    "HTML",
    "JavaScript",
    "CSS",
    "Tailwind CSS",
    "React",
    "Web Development",

    "Python",
    "C",
    "Java",

    "SQL",
    "Git",
    "Testing",
    "Blender",
    "Agile methodologies",
    "Video Editing",
]


/*
 * Contains Education for resume
 */
export const education = [
    {
        institution: "Dalhousie University",
        degree: "Bachelor of Computer Science",
        level: "Undergraduate",
        location: "Halifax, NS",
        date: "september 2022 - present",
        grad: "2027",
        example_courses: [
            "Experimental Robotics",
            "Web Design and Development",
            "Theory of Computer Science"
        ],
        next_available_for_coop: "Winter, January 2026",
    }
];


/*
 * Contains work experience for resume
 * experience is an array of objects sorted by most recent first
 * each object has the following properties:
 * - title: string
 * - company: string
 * - location: string
 * - start_date: string (e.g., "May 2025")
 * - end_date: string (e.g., "July 2025")
 * - description: string
 * - relevant: boolean (true if the experience is relevant to the resume, false otherwise)
 */
export const workExperience = [
    {
        title: "Software Development Co-op",
        company: "Cognizant",
        location: "Halifax, NS",
        date: "May 2025 - July 2025",
        description: "Description for cognizant",
        relevant: true
    },
    {
        title: "Kitchen Staff",
        company: "Smitty's Family Restaurant",
        location: "Halifax, NS",
        date: "September 2022 - May 2023",
        description: "Description for Smitty's",
        relevant: false
    },
    {
        title: "Kitchen Staff",
        company: "Kebab Kitchen",
        location: "Dartmouth, NS",
        date: "November 2021 - September 2022",
        description: "Description for Kebab Kitchen",
        relevant: false
    },
];


/*
 * Contains information on various projects
 * includes:
 * - project name
 * - date (if one exists)
 * - related course (if one exists)
 * - type: academic, personal, or work
 * - notes
 */
export const projects = [
    {
        name: "Personal Website",
        date: "July 2025 - Current",
        type: "personal",
        hidden: false,
        notes: []
    },
    {
        name: "360 SpaceStyler",
        date: "May 2025 - July 2025",
        type: "work",
        hidden: true,
        notes: []
    },
    {
        name: "JSON Scanner and Parser",
        date: "October 2024 - November 2024",
        course: "Theory of Computer Science",
        type: "academic",
        hidden: false,
        notes: ["Created the workflow to describe the functions of the program",
                "Designed a Python program to read files and convert the text into JSON",
                "Wrote a Python program to be able to read the JSON and utilize it",
                "Added error handling for the program for input that is not in JSON"]
    },
    {
        name: "Product Research",
        date: "October 2024 - November 2024",
        course: "Workplace Communications",
        type: "academic",
        hidden: false,
        notes: ["Wrote a document reviewing and comparing multiple business products",
                "Worked with team members to create a report and presentation to properly recommend five products for a mock company",
                "Helped organize the team to efficiently complete work",
                "Effectively presented our research to an audience"]
    },
    {
        name: "Robot Navigation",
        date: "October 2023 - November 2023",
        course: "Experimental Robotics",
        type: "academic",
        hidden: false,
        notes: ["Programmed a Robot from scratch to navigate through a maze with an unknown route",
                "Wrote Code with VPL (Visual Programming Language) to read barcodes with the robot’s sensors to receive directions from them",
                "Worked as a team to test and debug the code",
                "Performed tests with the robot to account for variations in each robot."]
    },
    {
        name: "Blindness Accessibility Work",
        date: "January 2025 - Current",
        type: "personal",
        hidden: false,
        notes: ["Edited an existing 3D model in an effort to support the learning of blind people in neuroscience"]
    },
    {
        name: "3D Modeling",
        date: "January 2025 - Current",
        type: "personal",
        hidden: false,
        notes: ["Used Blender to design and build a character model",
                "Applied colours and textures to the character for rendering",
                "Rigged the character model"]
    },
    {
        name: "2D Platformer Game",
        date: "August 2022 - April 2023",
        type: "personal",
        hidden: false,
        notes: ["Programed a short 2D platformer game in Java",
                "Personally wrote all classes and methods for the game",
                "Designed all in-game levels and optimized implementation",
                "Created all in-game assets"]
    },
    
]