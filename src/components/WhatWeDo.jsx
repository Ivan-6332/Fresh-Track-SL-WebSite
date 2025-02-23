import React from 'react';
import { useNavigate } from 'react-router-dom';

// Feature list with icons, titles, descriptions, and images for visual enhancement
const features = [
    { title: "Smart Agriculture & Food Distribution", description: "Optimizing food supply chains with AI-driven analytics for real-time demand forecasting.", image: new URL('/src/assets/Smart Agriculture & Food Distribution.jpg', import.meta.url).href },
    { title: "Real-Time Market Insights", description: "Providing live updates on food demand trends to help farmers and suppliers make informed decisions.", image: new URL('/src/assets/Real-Time Market Insights.jpg', import.meta.url).href },
    { title: "Seamless Supply Chain Integration", description: "Connecting farmers, distributors, and buyers to reduce waste and improve efficiency.", image: new URL('/src/assets/Seamless Supply Chain Integration.jpg', import.meta.url).href },
    { title: "Mobile-Friendly Access", description: "User-friendly mobile applications to track, analyze, and manage food stock on the go.", image: new URL('/src/assets/Mobile-Friendly Access.png', import.meta.url).href },
    { title: "Data Security & Compliance", description: "Ensuring secure transactions and data protection with industry-standard cybersecurity measures.", image: new URL('/src/assets/Data Security & Compliance.png', import.meta.url).href },
    { title: "24/7 Support & Assistance", description: "Dedicated support team available round the clock to assist with system operations and troubleshooting.", image: new URL('/src/assets/24-7-Support-Assistance.jpg', import.meta.url).href }
];

const WhatWeDo = () => {
    const navigate = useNavigate();

    return (
        <section id="what_we_do" className="py-20 bg-black min-h-screen"> 
            <div className="container mx-auto px-6 text-center">
                {/* Section heading */}
                <h1 className="text-5xl font-bold text-white mb-6">Our Features</h1>
                
                
              {/* Feature cards grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    {features.map((feature, index) => (
        <div 
            key={index} 
            className="bg-[#003300] text-white rounded-3xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition duration-300"
        >
            {/* Feature image */}
            <img src={feature.image} alt={feature.title} className="w-full h-48 object-cover" />
            <div className="p-6 text-center">
                {/* Feature title */}
                <h3 className="text-2xl font-semibold text-white mb-2">{feature.title}</h3>
                {/* Feature description */}
                <p className="text-gray-300 mb-4">{feature.description}</p>
                {/* Read more link */}
                <a href="#" className="text-white font-semibold hover:underline">Read more</a>
            </div>
        </div>
    ))}
</div>


                
                {/* Navigation button to another page */}
                <div className="mt-16">
                    <button 
                        onClick={() => navigate('/stay-tuned')}
                        className="bg-green-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-600 hover:shadow-lg transition duration-300"
                    >
                        Let's go!
                    </button>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;
