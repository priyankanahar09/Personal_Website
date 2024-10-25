import emoji from "react-easy-emoji";


// Name that will appear on the splash Screen
const splashScreenName = {
    name : "Priyanka"
}

//Logo name in the navigation bar
const navBarIcon = {
    name : "Priyanka"
}

const introduction = {
    firstName : "Priyanka" ,
    
    lastName : "Nahar" ,
    
    introductionText : "I am a computer science engineer with a master's in Neural Networks and Computers, specializing in AI and machine learning. I'm passionate about AI and eager to work on projects or research related to AI and ML." ,

    resumeLink : "",

    resumeButtonText : "SEE MY RESUME", 

    contactButtonText : "CONTACT ME"
}

const profilesToShow = [
    {
        name : "github",
        link : "https://github.com/priyankanahar09",
        fontAwesomeIcon : "fa fa-github",
    },

    {
        name : "leetcode",
        link : "https://leetcode.com/rhythm_varshney/",
        fontAwesomeIcon : "fas fa-code",
    },

    {
        name : "linkedin",
        link : "https://www.linkedin.com/in/priyanka-nahar/",
        fontAwesomeIcon : "fab fa-linkedin-in"
    },
    
    {
        name : "mail",
        link : "mailto:pn.nahar1@gmail.com",
        fontAwesomeIcon : "fas fa-envelope"
    }
]

const skillsToShow = {
    
    skillTitle : "What I do",

    skillSubtitle : "I specialize in machine learning and deep learning solutions and consulting.",

    skillList : [
       
        emoji("⚡ Proficient in cloud technologies: AWS, DevOps."),
        emoji("⚡ Expertise in Python, JavaScript, and web technologies."),
        emoji("⚡ AI and machine learning integration for smart features."),
        emoji("⚡ Experience with libraries like TensorFlow, OpenCV, scikit-learn.")
        ]
        ,

    softwareSkillsIcons : [
        {
            name: "Python",
            fontAwesomeIcon: "fab fa-python"
        },
        {
            name: "Linux",
            fontAwesomeIcon: "fab fa-linux"
        },
        {
            name: "C",
            fontAwesomeIcon: "fas fa-code"
        },
        {
            name: "C++",
            fontAwesomeIcon: "fab fa-cuttlefish"  // You can use a different icon if preferred
        },
        {
            name: "Java",
            fontAwesomeIcon: "fab fa-java"
        },
        {
            name: "DSA",
            fontAwesomeIcon: "fas fa-code"
        },
        {
            name: "JavaScript",
            fontAwesomeIcon: "fab fa-js"
        },
      
        {
            name: "Database",
            fontAwesomeIcon: "fas fa-database"
        },
        {
            name: "AWS (Basic)",
            fontAwesomeIcon: "fab fa-aws"
        },
        {
            name: "Notion",
            fontAwesomeIcon: "fab fa-notion"
        },
        {
            name: "Miro",
            fontAwesomeIcon: "fas fa-paint-brush"  // Use a relevant icon
        },
        {
            name: "Git",
            fontAwesomeIcon: "fab fa-git"
        },
        {
            name: "Docker",
            fontAwesomeIcon: "fab fa-docker"
        },
        {
            name: "Machine Learning",
            fontAwesomeIcon: "fas fa-brain"
        },
        {
            name: "Deep Learning",
            fontAwesomeIcon: "fas fa-robot"
        }
    ]
}


/* 
    Enter the Tech Stack in which you are proficient in 
    and also enter how much percent you're proficient in it
*/
const proficiencyData = {
    heading : "Proficiency" ,
    skillsData : [
        {
            name : "Python",
            percent : "85%"
        },
        {
            name : "Programming and DSA",
            percent : "85%"
        },
        {
            name : "Backend",
            percent : "70%"
        },

        {
            name : "Linux and Systems Administration",
            percent : "70%"
        }
    ]
}


/*
    Enter your github username. For example if your profile link is 
        • https://github.com/rhythm-design, then enter only "rhythm-design" as username
    
    Enter the repositories you want to show in the portfolio. For example if repo link is 
        • https://github.com/rhythm-design/NavigateTheBot, then enter only "NavigateTheBot" in repoNames array.
    Keep in mind that each repository name should be in `""` inverted commas and need to be seperated by `,`

    Enter github repositories tab link as "githubRepositoriesLink"

    You can also change button text by changing "projectsButtonText" 
*/
const projectsGithubRepos = {
    heading : "What I have made",
    username : "priyankanahar09",
    repoNames : [
        "GANCartoonStyle"
        
    ],
    githubRepositoriesLink : "https://github.com/priyankanahar09?tab=repositories",
    projectsButtonText : "More Projects"
}


/*
    Customize your achievement and certificate area heading through this object.

    You can add your achievement or Certificate details in the "achievementsOrCertificateDetails" array.
    Play with care with variables in this array else things might not look as you want
*/
const achievementsAndCertifications = {
    heading: emoji("Achievements and Certifications🏆"),
    subHeading : "ACHIEVEMENTS AND CERTIFICATES OF SOME WORK DONE BY ME",
    
    achievementsOrCertificateDetails : [
        {
            title: "Leetcode Testcases",
            description: "Added 4 missing test cases to Leetcode",
            imageAlt: "Leetcode png",
            imageSrc: "https://cdn.iconscout.com/icon/free/png-256/free-leetcode-3521542-2944960.png",
            hasLink: false,
            proofLink: "https://docs.google.com/document/d/1lbeHFpQlfQfhVB18PnrFbJ1cL-OJ6yTYZ1XlJ4kzP0E/edit",
            achievementButtonText: "Leetcode TestCases"
        },

        {
            title: "AWS EC2 SSH key-pair",
            description: "Corrected AWS command allowing millions users of AWS to seamlessly create key-pairs and SSH into their EC2 instances through CLI.",
            imageAlt: "AWS png",
            imageSrc: "https://hackfest.ca/images/partenaires/aws.png",
            hasLink: true,
            proofLink: "https://github.com/awsdocs/amazon-ec2-user-guide/pull/144",
            achievementButtonText: "AWS Github Merge"
        },

        {
            title: "LeetCode Solutions",
            description: "Contributed to Leetcode solutions which helped many users to understand concept and intuition in more accurate way.",
            imageAlt: "Leetcode png",
            imageSrc: "https://cdn.iconscout.com/icon/free/png-256/free-leetcode-3521542-2944960.png",
            hasLink: true,
            proofLink: "https://docs.google.com/document/d/10vYuOmOhiQVOh86IE_kXWbeIxw1_4-vEJoV8QcuOzWI/edit",
            achievementButtonText: "Leetcode Solutions"
        },

        {
            title: "Global ranking for DSA",
            description: "282 global rank in July Challenge 2021 and 554 global rank in April challenge 2021 on CodeChef.",
            imageAlt: "Leetcode png",
            imageSrc: "https://avatars.githubusercontent.com/u/11960354?v=4",
            hasLink: false,
            proofLink: "https://docs.google.com/document/d/1lbeHFpQlfQfhVB18PnrFbJ1cL-OJ6yTYZ1XlJ4kzP0E/edit",
            achievementButtonText: "Leetcode Solutions"
        }
    ]
}

/*
    You can change your contact me area details here.
*/

const contactMe = {
    heading : "Reach Out to me!",
    subHeading: "DISCUSS INNOVATIVE IDEAS OR HIRE ME FOR MACHINE LEARNING AND AI SOLUTIONS",
    bioText: "Aspiring Machine Learning Researcher | Deep Learning Specialist | Freelance Consultant | Helping you build intelligent and scalable solutions with Python, AI, and cloud technologies",
    location : "India",
    openForOpportunities : "YES",
    profilePicture : require("./assets/images/PriyankaProfile.jpg")   //You can change your picture by adding your photo in assets/images folder
}


export {
    splashScreenName,
    navBarIcon,
    introduction,
    profilesToShow,
    skillsToShow,
    proficiencyData,
    projectsGithubRepos,
    achievementsAndCertifications,
    contactMe
}