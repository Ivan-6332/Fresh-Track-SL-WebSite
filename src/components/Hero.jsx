import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaDownload } from 'react-icons/fa'; // Import icons
import videoSrc from '/src/assets/Heroimg/phone-mockup.mp4'; // Import the video
import bgImage from '/src/assets/Heroimg/video-poster.png'; // Import the background image

const Hero = () => {
  const [showVideo, setShowVideo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(false); // Hide the video and show the background image
    }, 800); // Change time to 3.5 seconds (3500 milliseconds)

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-black min-h-screen flex items-center justify-between px-10 py-20 relative">
      {/* Text content */}
      <div className="text-white z-10">
        <h1 className="text-6xl font-bold">Fresh Track SL</h1>
        <p className="mt-4 text-lg">
          Revolutionizing the future through innovative solutions and cutting-edge technology
        </p>

        <div className="mt-8 flex items-center space-x-4">
          <button className="bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 flex items-center space-x-2">
            <FaDownload /> {/* Download icon */}
            <span>Download App</span>
          </button>
          <a href="#" className="text-white text-3xl border-2 border-white p-2 rounded">
            <FaDownload /> {/* Another download icon */}
          </a>
        </div>

        {/* Social media icons */}
        <div className="mt-8 flex space-x-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-700 hover:text-green-500 text-3xl p-2 border-2 border-green-700 rounded"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-700 hover:text-green-500 text-3xl p-2 border-2 border-green-700 rounded"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-700 hover:text-green-500 text-3xl p-2 border-2 border-green-700 rounded"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Background video or image (shown only on laptop-size screens and larger) */}
      <div className="absolute inset-0 overflow-hidden hidden lg:block">
        {showVideo ? (
          <video
            id="background-video"
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={videoSrc}
            autoPlay
            muted
            playsInline
            preload="auto"
          />
        ) : (
          <img
            src={bgImage}
            alt="Background"
            className="absolute top-0 left-0 w-full h-full object-cover"
            loading="eager"
          />
        )}
      </div>
    </section>
  );
};

export default Hero;
