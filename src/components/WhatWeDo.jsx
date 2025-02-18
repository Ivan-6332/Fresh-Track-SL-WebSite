import React from 'react';
import { useNavigate } from 'react-router-dom';

const features = [
    {
        icon: "🌾",
        title: "Smart Agriculture & Food Distribution",
        description: "Optimizing food supply chains with AI-driven analytics for real-time demand forecasting."
    },
    {
        icon: "📊",
        title: "Real-Time Market Insights",
        description: "Providing live updates on food demand trends to help farmers and suppliers make informed decisions."
    },
    {
        icon: "🔗",
        title: "Seamless Supply Chain Integration",
        description: "Connecting farmers, distributors, and buyers to reduce waste and improve efficiency."
    },
    {
        icon: "📱",
        title: "Mobile-Friendly Access",
        description: "User-friendly mobile applications to track, analyze, and manage food stock on the go."
    },
    {
        icon: "🛡️",
        title: "Data Security & Compliance",
        description: "Ensuring secure transactions and data protection with industry-standard cybersecurity measures."
    },
    {
        icon: "🕒",
        title: "24/7 Support & Assistance",
        description: "Dedicated support team available round the clock to assist with system operations and troubleshooting."
    }
];

const WhatWeDo = () => {
    const navigate = useNavigate();

    return (
        <section id="what_we_do" className="py-20 bg-black min-h-screen">
            {/* Main Content Container */}
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-5xl font-bold text-white mb-6">What We Do</h1>
                    <p className="text-xl text-gray-300 leading-relaxed mb-8">
                        Transforming ideas into reality through innovative technology solutions
                    </p>
                </div>

                {/* Our Aim Section */}
                <div className="bg-zinc-900/50 rounded-2xl p-8 mb-16 backdrop-blur-sm max-w-4xl mx-auto">
                    <h2 className="text-3xl font-semibold text-white mb-4 text-center">Our Aim</h2>
                    <p className="text-gray-300 text-lg leading-relaxed text-center">
                        To revolutionize the digital landscape by delivering exceptional software solutions 
                        that empower businesses to thrive in the modern world. We strive to be at the 
                        forefront of technological innovation while maintaining the highest standards of 
                        quality and client satisfaction.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {features.map((feature, index) => (
                        <div 
                            key={index}
                            className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition duration-300"
                        >
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                            <p className="text-gray-300">{feature.description}</p>
                        </div>
                    ))}
                </div>

                {/* Description Section */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <p className="text-lg text-gray-300 leading-relaxed">
                        With years of experience in software development and digital transformation, 
                        we bring expertise and innovation to every project. Our team of skilled professionals 
                        is dedicated to delivering solutions that not only meet but exceed client expectations.
                    </p>
                </div>

                {/* Learn More Section */}
                <div className="text-center">
                    <div className="inline-block bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 transform hover:scale-105 transition duration-300">
                        <h3 className="text-2xl font-semibold text-white mb-4">Want to Know More About Us?</h3>
                        <p className="text-gray-300 mb-6">
                            Discover how we can help transform your business with our innovative solutions.
                        </p>
                        <button 
                            onClick={() => navigate('/stay-tuned')}
                            className="inline-block bg-green-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition duration-300"
                        >
                            Let's go!
                        </button>
                    </div>
                </div>

                {/* Background Decorative Elements */}
                <div className="absolute top-1/4 left-0 w-64 h-64 bg-green-500/10 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-green-500/10 rounded-full filter blur-3xl"></div>
            </div>

            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black opacity-50 -z-10"></div>
        </section>
    );
};

export default WhatWeDo;
