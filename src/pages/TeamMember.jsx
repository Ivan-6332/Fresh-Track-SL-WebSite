import React from 'react';
import { useParams, Link } from 'react-router-dom';

const teamMembers = {
    'ivan-de-zoysa': {
        name: "Ivan De Zoysa",
        role: "Team Leader",
        image: "/src/assets/team/Ivan.jpg",
        largeImage: "/src/assets/team/Ivan-large.jpg",
        description: "Visionary leader with 15+ years of industry experience, driving innovation and growth. Ivan specializes in strategic planning, team leadership, and innovative solution development. His expertise spans across multiple domains including software architecture, project management, and business development.",
        portfolio: [
            { title: "Project Leadership", description: "Led multiple successful projects in software development and system integration" },
            { title: "Innovation Management", description: "Spearheaded the adoption of cutting-edge technologies and methodologies" },
            { title: "Team Development", description: "Built and mentored high-performing technical teams" }
        ],
        cv: {
            education: ["Master's in Computer Science", "Bachelor's in Software Engineering"],
            experience: [
                "Senior Technical Lead - 5 years",
                "Software Architect - 4 years",
                "Senior Developer - 6 years"
            ],
            skills: ["Leadership", "Project Management", "Software Architecture", "Team Building", "Strategic Planning"]
        }
    },
    'parama-herath': {
        name: "Parama Herath",
        role: "Team Member",
        image: "/team/member2.jpg",
        largeImage: "/team/member2-large.jpg",
        description: "Expert in cutting-edge technologies, leading our technical initiatives with precision. Parama brings deep technical expertise in modern web technologies and cloud architecture.",
        portfolio: [
            { title: "Technical Architecture", description: "Designed scalable system architectures for enterprise applications" },
            { title: "Cloud Solutions", description: "Implemented cloud-native solutions using AWS and Azure" },
            { title: "Performance Optimization", description: "Led system optimization initiatives improving performance by 40%" }
        ],
        cv: {
            education: ["Bachelor's in Computer Engineering"],
            experience: [
                "Senior Software Engineer - 4 years",
                "Cloud Architect - 3 years"
            ],
            skills: ["Cloud Architecture", "Full Stack Development", "System Design", "DevOps", "Agile Methodologies"]
        }
    },
    'dinithi-viranda': {
        name: "Dinithi Viranda",
        role: "Team Member",
        image: "/team/member3.jpg",
        largeImage: "/team/member3-large.jpg",
        description: "Award-winning creative professional bringing designs to life. Dinithi excels in creating user-centric designs and implementing modern UI/UX principles.",
        portfolio: [
            { title: "UI/UX Design", description: "Created intuitive user interfaces for multiple high-traffic applications" },
            { title: "Brand Development", description: "Led the design and implementation of brand identity systems" },
            { title: "Interactive Experiences", description: "Developed engaging interactive web experiences" }
        ],
        cv: {
            education: ["Bachelor's in Design", "UX Design Certification"],
            experience: [
                "Senior UI/UX Designer - 3 years",
                "Creative Lead - 2 years"
            ],
            skills: ["UI Design", "UX Research", "Prototyping", "Visual Design", "User Testing"]
        }
    },
    'gayantha-hathnagoda': {
        name: "Gayantha Hathnagoda",
        role: "Team Member",
        image: "/team/member4.jpg",
        largeImage: "/team/member4-large.jpg",
        description: "Strategic marketing expert with a passion for brand storytelling. Gayantha brings expertise in digital marketing and brand development.",
        portfolio: [
            { title: "Marketing Strategy", description: "Developed comprehensive marketing strategies for various industries" },
            { title: "Digital Campaigns", description: "Led successful digital marketing campaigns" },
            { title: "Content Strategy", description: "Created engaging content strategies driving user engagement" }
        ],
        cv: {
            education: ["Bachelor's in Marketing", "Digital Marketing Certification"],
            experience: [
                "Marketing Strategist - 4 years",
                "Digital Marketing Manager - 3 years"
            ],
            skills: ["Digital Marketing", "Brand Strategy", "Content Marketing", "Analytics", "Social Media Management"]
        }
    },
    'nethmee-mudannayaka': {
        name: "Nethmee Mudannayaka",
        role: "Team Member",
        image: "/src/assets/team/Nethmee.jpg",
        largeImage: "/src/assets/team/Nethmee-large.jpg",
        description: "Full-stack developer extraordinaire, turning ideas into reality. Nethmee specializes in building robust and scalable applications.",
        portfolio: [
            { title: "Full Stack Development", description: "Developed end-to-end solutions for enterprise clients" },
            { title: "API Design", description: "Created RESTful APIs for various applications" },
            { title: "Database Architecture", description: "Designed and optimized database structures" }
        ],
        cv: {
            education: ["Bachelor's in Software Engineering"],
            experience: [
                "Senior Full Stack Developer - 4 years",
                "Backend Developer - 2 years"
            ],
            skills: ["Full Stack Development", "API Design", "Database Management", "Web Security", "Performance Optimization"]
        }
    },
    'dilshan-hirimuthugoda': {
        name: "Dilshan Hirimuthugoda",
        role: "Team Member",
        image: "/team/member6.jpg",
        largeImage: "/team/member6-large.jpg",
        description: "User experience specialist creating intuitive and engaging designs. Dilshan focuses on creating seamless user experiences through innovative design solutions.",
        portfolio: [
            { title: "UX Research", description: "Conducted user research and usability testing" },
            { title: "Interaction Design", description: "Created interactive prototypes and wireframes" },
            { title: "Design Systems", description: "Developed and maintained design systems" }
        ],
        cv: {
            education: ["Bachelor's in Interactive Design", "Human-Computer Interaction Certificate"],
            experience: [
                "UX Designer - 3 years",
                "Interaction Designer - 2 years"
            ],
            skills: ["UX Design", "Interaction Design", "Prototyping", "User Research", "Design Systems"]
        }
    }
};

const TeamMember = () => {
    const { id } = useParams();
    const member = teamMembers[id];

    if (!member) {
        return <div className="min-h-screen bg-black text-white flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-3xl font-bold mb-4">Member not found</h1>
                <Link to="/team" className="text-green-500 hover:text-green-400">Return to Team</Link>
            </div>
        </div>;
    }

    return (
        <div className="min-h-screen bg-black text-white pt-20 pb-20">
            <div className="container mx-auto px-4">
                {/* Navigation */}
                <div className="mb-10">
                    <Link to="/team" className="text-green-500 hover:text-green-400 flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Team
                    </Link>
                </div>

                {/* Hero Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                    <div className="relative">
                        <div className="absolute inset-0 bg-green-500 rounded-lg blur-xl opacity-20"></div>
                        <img 
                            src={member.largeImage || member.image} 
                            alt={member.name}
                            className="relative rounded-lg w-full h-auto object-cover"
                        />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold mb-2">{member.name}</h1>
                        <p className="text-green-500 text-xl mb-6">{member.role}</p>
                        <p className="text-gray-300 leading-relaxed mb-8">{member.description}</p>
                        
                        {/* Skills */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4">Skills</h2>
                            <div className="flex flex-wrap gap-2">
                                {member.cv.skills.map((skill, index) => (
                                    <span key={index} className="bg-zinc-800 text-green-500 px-3 py-1 rounded-full text-sm">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Portfolio Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-8">Portfolio</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {member.portfolio.map((item, index) => (
                            <div key={index} className="bg-zinc-900 rounded-lg p-6 hover:bg-zinc-800 transition-colors duration-300">
                                <h3 className="text-xl font-semibold mb-3 text-green-500">{item.title}</h3>
                                <p className="text-gray-300">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CV Section */}
                <div>
                    <h2 className="text-3xl font-bold mb-8">Professional Background</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-semibold mb-4 text-green-500">Education</h3>
                            <ul className="space-y-3">
                                {member.cv.education.map((edu, index) => (
                                    <li key={index} className="text-gray-300">{edu}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold mb-4 text-green-500">Experience</h3>
                            <ul className="space-y-3">
                                {member.cv.experience.map((exp, index) => (
                                    <li key={index} className="text-gray-300">{exp}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamMember;
