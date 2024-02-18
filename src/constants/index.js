import {  garizim } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    landing,
    nft,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "React.js Developer",
        company_name: "Garizim S.A.",
        icon: garizim,
        iconBg: "#accbe1",
        date: "December 2022 - December 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including product managers, and other management team to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            
        ],
    },
    
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/cterogene',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: landing,
        theme: 'btn-back-red',
        name: 'NFT Landing Page',
        description: 'Developed a landing page created by side with a react native app that can  Buy, store, collect NFTs, exchange & earn crypto.',
        link: 'https://github.com/cterogene/NFTShowcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Android Instagram Clone',
        description: 'Built a partial clone of Instagram, allowing users to share photos and like in a familiar social media environment.',
        link: 'https://github.com/cterogene/Instagram-Clone',
    },
    {
        iconUrl: nft,
        theme: 'btn-back-blue',
        name: 'NFT Collection app',
        description: 'App that can help you manage, collect, store and buy NFT product',
        link: 'https://github.com/cterogene/React-Native-Nft-app',
    }
];