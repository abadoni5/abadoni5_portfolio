import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    git,
    figma,
    starbucks,
    tesla,
    shopify,
    moovy,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Js Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Algorithms and Logic",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
];

const experiences = [
    {
        title: "Frontend Developer",
        company_name: "DiverSea",
        icon: shopify,
        iconBg: "#383E56",
        date: "August 2022",
        points: [
            "Developed as a hackathon project",
            "Working on design and on the frontend of the website",
            "Presenting and pitching the project to the judges with the fellow team members",
        ],
    },
    {
        title: "Web Developer",
        company_name: "K.N. Holidays",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "May 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to partner developer.",
        ],
    },
    {
        title: "React Developer",
        company_name: "Moovy",
        icon: starbucks,
        iconBg: "#383E56",
        date: "June 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Fixing bugs and performing updates when necessary.",
            "Created as a personal project"
        ],
    }
];

const testimonials = [
    {
        testimonial:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
        name: "PlaceHolder",
        designation: "human",
        company: "earth",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
        name: "PlaceHolder",
        designation: "human",
        company: "earth",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        name: "PlaceHolder",
        designation: "human",
        company: "earth",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Moovy",
        description:
            "Moovy is a responsive web application that provides information about movies and serves as a forum for movie lovers. It utilizes TMDB API to deliver a seamless browsing experience.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "redux",
                color: "green-text-gradient",
            },
            {
                name: "MaterialUI",
                color: "pink-text-gradient",
            },
        ],
        image: moovy,
        source_code_link: "https://github.com/abadoni5/Moovy",
    },

];

export { services, technologies, experiences, testimonials, projects };