import 'react';
import supabase from './utils/supabase.ts';
import { useEffect, useState } from 'react';
import Header from './components/Header.tsx';
import AboutMe from './sections/AboutMe.tsx';
import Skills from './sections/Skills.tsx';
import ContactMe from './sections/ContactMe.tsx';
import Project from './sections/Project.tsx';
import Banner from './sections/Banner.tsx';
import Experiences from './sections/Experiences.tsx';

export default function App() {
  return (
    <div className="relative">
      <h1 className="a11y-hidden">박윤선 포트폴리오</h1>
      <div className="fixed w-full top-0 z-50 font-sora">
        <Header />
      </div>
      <div className="">
        <Banner />
        <AboutMe />
        <Experiences />
        <Skills />
        <Project />
        <ContactMe />
      </div>
    </div>
  );
}
