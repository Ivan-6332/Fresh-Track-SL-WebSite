import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // Handle navbar transparency on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleHomeClick = () => {
        navigate('/');
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
        setIsOpen(false);
    };

    const scrollToSection = (sectionId) => {
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setIsOpen(false);
    };

    const handleTeamClick = () => {
        if (location.pathname === '/team') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            navigate('/team');
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 100);
        }
        setIsOpen(false);
    };

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            isScrolled ? 'bg-black/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
        }`}>
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-20">
                    {/* Logo - increased size */}
                    <button 
                        onClick={handleHomeClick}
                        className="text-white text-1xl font-bold hover:text-green-500 transition-colors"
                    >
                        Fresh Track SL
                    </button>

                    {/* Desktop Navigation - increased size */}
                    <div className="hidden md:flex space-x-10">
                        <button 
                            onClick={handleHomeClick}
                            className="text-white text-lg hover:text-green-500 transition-colors relative group"
                        >
                            Home
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
                        </button>
                        <button 
                            onClick={() => scrollToSection('what_we_do')}
                            className="text-white text-lg hover:text-green-500 transition-colors relative group"
                        >
                            What We Do
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
                        </button>
                        <button
                            onClick={handleTeamClick}
                            className="text-white text-lg hover:text-green-500 transition-colors relative group"
                        >
                            Team
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
                        </button>
                        <button 
                            onClick={() => scrollToSection('blog')}
                            className="text-white text-lg hover:text-green-500 transition-colors relative group"
                        >
                            Blog
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
                        </button>
                        <button 
                            onClick={() => scrollToSection('contact')}
                            className="text-white text-lg hover:text-green-500 transition-colors relative group"
                        >
                            Contact
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
                        </button>
                    </div>

                    {/* Mobile Menu Button - increased size */}
                    <button 
                        className="md:hidden text-white hover:text-green-500 transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu - increased size */}
                {isOpen && (
                    <div className="md:hidden bg-black/95 py-4 backdrop-blur-sm rounded-b-lg">
                        <div className="flex flex-col space-y-4 px-4">
                            <button 
                                onClick={handleHomeClick}
                                className="text-white text-lg hover:text-green-500 transition-colors text-left py-2"
                            >
                                Home
                            </button>
                            <button 
                                onClick={() => scrollToSection('what_we_do')}
                                className="text-white text-lg hover:text-green-500 transition-colors text-left py-2"
                            >
                                What We Do
                            </button>
                            <button
                                onClick={handleTeamClick}
                                className="text-white text-lg hover:text-green-500 transition-colors text-left py-2"
                            >
                                Team
                            </button>
                            <button 
                                onClick={() => scrollToSection('blog')}
                                className="text-white text-lg hover:text-green-500 transition-colors text-left py-2"
                            >
                                Blog
                            </button>
                            <button 
                                onClick={() => scrollToSection('contact')}
                                className="text-white text-lg hover:text-green-500 transition-colors text-left py-2"
                            >
                                Contact
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;