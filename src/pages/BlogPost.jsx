import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const BlogPost = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const handleHomeClick = () => {
        navigate('/');
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-zinc-900 to-green-950 relative overflow-hidden">
            
            {/* Main content */}
            <div className="relative z-10 flex flex-col items-center bg-zinc-800/30 p-12 rounded-3xl backdrop-blur-sm border border-zinc-700/50 shadow-xl">
                
                <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
                    Blog Post {id}
                </h1>
                
                <p className="text-2xl text-gray-300 mb-8 text-center">
                    Still under construction
                    <span className="inline-block animate-bounce ml-2">🚧</span>
                </p>
                
                <button 
                    onClick={handleHomeClick}
                    className="group flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-green-500/25"
                >
                    <span className="group-hover:scale-110 transition-transform">🏠</span>
                    Back Home
                </button>
            </div>
            
            {/* Background decoration */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,127,0.05)_0%,transparent_70%)]" />
        </div>
    );
};

export default BlogPost;