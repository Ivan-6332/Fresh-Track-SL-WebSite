import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import Team from './components/Team';
import Blog from './components/Blog';
import Contact from './components/Contact';
import VideoBackground from './components/VideoBackground';
import TeamMember from './pages/TeamMember';

const HomePage = () => (
  <div className="relative">
    <Navbar />
    <div className="backdrop-blur-[1px]">
      <Hero />
      <WhatWeDo />
      <Team />
      <Blog />
      <Contact />
    </div>
  </div>
);

const App = () => {
  return (
    <Router>
      <main className="relative min-h-screen overflow-x-hidden antialiased">
        {/* Video Background */}
        <VideoBackground />

        {/* Main Content */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/team/:id" element={<TeamMember />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App;