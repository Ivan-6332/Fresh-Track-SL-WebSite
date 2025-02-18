import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const StayTuned = () => {
    const navigate = useNavigate();
    const [bounce, setBounce] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setBounce(prev => !prev);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const handleHomeClick = () => {
        navigate('/');
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-zinc-900 to-green-950 relative overflow-hidden">
            {/* Cute Animated Plant - Hidden on very small screens */}
            <svg
                className="absolute left-0 bottom-0 h-[400px] w-[400px] md:h-[600px] md:w-[600px] hidden sm:block"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Main Stem */}
                <path
                    d="M 100 200 Q 100 150 100 100"
                    stroke="#22c55e"
                    strokeWidth="4"
                    className="animate-draw-line"
                />
                
                {/* Large Bottom Leaves */}
                <path
                    d="M 100 180 Q 140 170 120 140 Q 110 160 100 180"
                    fill="#16a34a"
                    className="animate-draw-fill delay-500"
                />
                <path
                    d="M 100 180 Q 60 170 80 140 Q 90 160 100 180"
                    fill="#16a34a"
                    className="animate-draw-fill delay-700"
                />

                {/* Middle Leaves */}
                <path
                    d="M 100 150 Q 130 140 115 120 Q 107 135 100 150"
                    fill="#22c55e"
                    className="animate-draw-fill delay-1000"
                />
                <path
                    d="M 100 150 Q 70 140 85 120 Q 93 135 100 150"
                    fill="#22c55e"
                    className="animate-draw-fill delay-1200"
                />

                {/* Top Leaves */}
                <path
                    d="M 100 120 Q 120 110 110 90 Q 105 105 100 120"
                    fill="#4ade80"
                    className="animate-draw-fill delay-1500"
                />
                <path
                    d="M 100 120 Q 80 110 90 90 Q 95 105 100 120"
                    fill="#4ade80"
                    className="animate-draw-fill delay-1700"
                />

                {/* Cute Details */}
                <circle cx="105" cy="140" r="2" fill="#86efac" className="animate-draw-fill delay-2400" />
                <circle cx="95" cy="130" r="2" fill="#86efac" className="animate-draw-fill delay-2600" />
                <circle cx="100" cy="160" r="2" fill="#86efac" className="animate-draw-fill delay-2800" />
            </svg>

            {/* Main content with mobile responsiveness */}
            <div className="relative z-10 text-center px-4 md:px-0">
                <h1 className={`text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 ${
                    bounce ? 'animate-bounce' : ''
                }`}>
                    Stay Tuned!
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 mb-8 md:mb-12 max-w-2xl px-4 animate-pulse mt-6 md:mt-8">
                    🌱 We're working on something exciting.
                    <br />
                    <span className="text-emerald-400">
                        Check back soon for more updates! ✨
                    </span>
                </p>

                <button 
                    onClick={handleHomeClick}
                    className="group relative bg-gradient-to-r from-green-600 to-emerald-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/50"
                >
                    <span className="group-hover:scale-110 transition-transform">🏠</span>
                    Home
                </button>
            </div>

            {/* Small decorative plant for mobile only */}
            <div className="absolute bottom-0 left-0 sm:hidden">
                <svg
                    className="h-32 w-32"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M 50 100 Q 50 75 50 50"
                        stroke="#22c55e"
                        strokeWidth="3"
                        className="animate-draw-line"
                    />
                    <path
                        d="M 50 80 Q 70 70 60 50 Q 55 65 50 80"
                        fill="#4ade80"
                        className="animate-draw-fill delay-500"
                    />
                    <path
                        d="M 50 80 Q 30 70 40 50 Q 45 65 50 80"
                        fill="#4ade80"
                        className="animate-draw-fill delay-700"
                    />
                </svg>
            </div>

            <style jsx>{`
                @keyframes drawLine {
                    from {
                        stroke-dashoffset: 1000;
                    }
                    to {
                        stroke-dashoffset: 0;
                    }
                }

                @keyframes drawFill {
                    from {
                        opacity: 0;
                        transform: scale(0);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                .animate-draw-line {
                    stroke-dasharray: 1000;
                    stroke-dashoffset: 1000;
                    animation: drawLine 2s forwards;
                }

                .animate-draw-fill {
                    animation: drawFill 1s forwards;
                    opacity: 0;
                    transform-origin: bottom;
                }

                .delay-500 { animation-delay: 0.5s; }
                .delay-700 { animation-delay: 0.7s; }
                .delay-1000 { animation-delay: 1s; }
                .delay-1200 { animation-delay: 1.2s; }
                .delay-1500 { animation-delay: 1.5s; }
                .delay-1700 { animation-delay: 1.7s; }
                .delay-2400 { animation-delay: 2.4s; }
                .delay-2600 { animation-delay: 2.6s; }
                .delay-2800 { animation-delay: 2.8s; }
            `}</style>
        </div>
    );
};

export default StayTuned;