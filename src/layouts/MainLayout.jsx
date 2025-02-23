import React from 'react';
import Navbar from '../components/Navbar';
import VideoBackground from '../components/VideoBackground';

const MainLayout = ({ children }) => {
  return (
    <>
      <VideoBackground />
      <Navbar />
      <div className="backdrop-blur-[1px]">
        {children}
      </div>
    </>
  );
};

export default MainLayout; 