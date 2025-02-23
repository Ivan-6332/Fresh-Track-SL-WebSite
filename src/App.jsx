import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import Team from './components/Team';
import Blog from './components/Blog';
import Contact from './components/Contact';
import TeamMember from './pages/TeamMember';
import MainLayout from './layouts/MainLayout';
import StayTuned from './pages/StayTuned';
import BlogPost from './pages/BlogPost';

const HomePage = () => (
  <>
    <Hero />
    <WhatWeDo />
    <Team showNavbar={false} />
    <Blog />
    <Contact />
  </>
);

const TeamPage = () => (
  <Team showNavbar={false} />
);

const App = () => {
  return (
      <main className="relative min-h-screen overflow-x-hidden antialiased">
        <Routes>
          <Route path="/" element={
            <MainLayout>
              <HomePage />
            </MainLayout>
          } />
          <Route path="/team" element={
            <MainLayout>
              <TeamPage />
            </MainLayout>
          } />
          <Route path="/team/:id" element={
            <MainLayout>
              <TeamMember />
            </MainLayout>
          } />
          <Route path="/stay-tuned" element={
            <MainLayout>
              <StayTuned />
            </MainLayout>
          } />
          <Route path="/blog/:id" element={
            <MainLayout>
              <BlogPost />
            </MainLayout>
          } />
        </Routes>
      </main>
  );
};

export default App;
