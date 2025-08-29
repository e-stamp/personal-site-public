const info = [
        {
            "first_name": "Eva",
            "last_name": "Stamp",
            "pronouns": "She/Her",
            "email": "oastamp08@gmail.com",
            "school_email": "estamp@dal.ca",
            "github": "https://github.com/e-stamp",
            "linkedin": "https://www.linkedin.com/in/eva-stamp-87617232a"
        }
    ]
const skills = [
        "HTML",
        "JavaScript",
        "CSS",
        "TailwindCSS",
        "React",
        "Web Development",

        "Python",
        "C",
        "Java",

        "AWS",
        "Amazon Sagemaker",
        "Object Oriented Programming",
        "SQL",
        "Git",
        "Testing",
        "Blender",
        "Agile methodologies",
        "Video Editing"
    ]
const education = [{
        "institution": "Dalhouse University",
        "degree": "Bachelor of Computer Science",
        "level": "Undergraduate",
        "location": "Halifax, NS",
        "date": "September 2022 - Present",
        "grad": "2027",
        "example_courses": ["Experimental Robotics", "Web Design and Development", "Theory of Computer Science", "Practical Data Science", "Software_Development"],
        "next_available_for_coop": "Winter, January 2026"
    }]
const work_experience = [
        {
            "title": "Associate Intern (Software Development Co-op)",
            "company": "Cognizant",
            "location": "Halifax, NS",
            "date": "May 2025 - July 2025",
            "description": "Developed a website to be used by realtors and renters to create and experience virtual tours of rental properties without the need for expensive equipment. Renters were also able to make edits to the rooms they were touring to see how their furniture would fit in the space.",
            "relevant": true
        },
        {
            "title": "Floor Clerk (Volunteer)",
            "company": "Mission Mart",
            "location": "Halifax, NS",
            "date": "June 2024 - January 2025",
            "description": "Consistently had good customer service while also keeping inventory stocked and on display",
            "relevant": false
        },
        {
            "title": "Kitchen Staff",
            "company": "Smitty's Family Restaurant / Kebab Kitchen",
            "location": "Halifax, NS / Dartmouth, NS",
            "date": "September 2022 - May 2023 / November 2021 - September 2022",
            "description": "Quickly and efficiently maintained the cleanliness of the tableware, kitchen tools, and general restaurant environment",
            "relevant": false
        },
    ]
const projects = [
        {
        "name": "Personal Website",
        "date": "July 2025 - Current",
        "type": "personal",
        "hidden": false,
        "summary": "Fully programmed this personal website using React, Vite, and Flask.",
        "notes": ["Created the frontend of the website using React and Vite",
                  "Added styling to the website through a combination of standard CSS and TailwindCSS",
                  "Future Plans to add an interactive game to provide an alternate experience when viewing the site"]
    },
    {
        "name": "JSON Scanner and Parser",
        "date": "October 2024 - November 2024",
        "course": "Theory of Computer Science",
        "type": "academic",
        "hidden": false,
        "summary": "Wrote a Python program to that can read files given to it and extract the JSON from them.",
        "notes": ["Created the workflow to describe the functions of the program",
                "Designed a Python program to read files and convert the text into JSON",
                "Wrote a Python program to be able to read the JSON and utilize it",
                "Added error handling for the program for input that is not in JSON"]
    },
    {
        "name": "Product Research",
        "date": "October 2024 - November 2024",
        "course": "Workplace Communications",
        "type": "academic",
        "hidden": false,
        "summary": "Worked as a team to create a detailed report on product information for a mock company.",
        "notes": ["Wrote a document reviewing and comparing multiple business products",
                "Worked with team members to create a report and presentation to properly recommend five products for a mock company",
                "Helped organize the team to efficiently complete work",
                "Effectively presented our research to an audience"]
    },
    {
        "name": "Robot Navigation",
        "date": "October 2023 - November 2023",
        "course": "Experimental Robotics",
        "type": "academic",
        "hidden": false,
        "summary": "Worked as a team to program a Robot to navigate a maze with no prior knowledge of the maze layout.",
        "notes": ["Programmed a Robot from scratch to navigate through a maze with an unknown route",
                "Wrote Code with VPL (Visual Programming Language) to read barcodes with the robot’s sensors to receive directions from them",
                "Worked as a team to test and debug the code",
                "Performed tests with the robot to account for variations in each robot."]
    },
    {
        "name": "Blindness Accessibility Work",
        "date": "January 2025 - Current",
        "type": "personal",
        "hidden": false,
        "summary": "Used Blender to update existing 3D models designed to make neuroscience more accessible to the visually impaired",
        "notes": ["Edited an existing 3D model in an effort to support the learning of blind people in neuroscience",
                  "Worked with a visually impaired person to gather ideas for creating an accessible website",
                  "Plans to create a website for Team Visual Assist in efforts to expand the teams outreach"]
    },
    {
        "name": "3D Modeling",
        "date": "January 2025 - Current",
        "type": "personal",
        "hidden": false,
        "summary": "Used Blender to create and edit 3D models",
        "notes": ["Used Blender to design and build a character model",
                "Applied colours and textures to the character for rendering",
                "Rigged the character model"]
    },
    {
        "name": "2D Platformer Game",
        "date": "August 2022 - April 2023",
        "type": "personal",
        "hidden": false,
        "summary": "Coded a small 2D platformer over the course of the first year of my degree.",
        "notes": ["Programed a short 2D platformer game in Java",
                "Personally wrote all classes and methods for the game",
                "Designed all in-game levels and optimized implementation",
                "Created all in-game assets"]
    },
    ]
const awards = [
        {
            "title": "Presidents award for Diversity, Equity, Inclusion, and Accessibility (EDIA)",
            "awarder": "Dalhousie University",
            "team": "Team Visual Assist"
        }
    ]


const api = {

    information: {
        async getInfo() {
            return info;
        },

        async getResumeInfo() {
            const resumeInfo = {skills, education, work_experience, projects, awards};
            return resumeInfo;
        },
        
        async getProjectInfo() {
            return projects;
        }
    }
}

export default api;