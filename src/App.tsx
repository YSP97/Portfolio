import 'react';
import supabase from './utils/supabase.ts';
import { useEffect, useState } from 'react';
import Header from './components/Header.tsx';
import AboutMe from './sections/AboutMe.tsx';
import Skills from './sections/Skills.tsx';
import ContactMe from './sections/ContactMe.tsx';
import Projects from './sections/Projects.tsx';
import Banner from './sections/Banner.tsx';
import Experiences from './sections/Experiences.tsx';
import MoveUp from './components/MoveUp.tsx';
import Modal from './components/Modal.tsx';
import ContactModal from './components/ContactModal.tsx';
import Footer from './components/Footer.tsx';

export default function App() {
  return (
    <div id="top" className="relative">
      <h1 className="a11y-hidden">박윤선 포트폴리오</h1>
      <div className="fixed w-full top-0 z-50 font-sora">
        <Header />
      </div>
      <div>
        <Banner />
        <AboutMe />
        <Experiences />
        <Skills />
        <Projects />
        {/* <ContactMe /> */}
      </div>
      <div className="fixed bottom-6 right-6">
        <MoveUp />
      </div>
      <div className="fixed z-50">
        <Modal />
        <ContactModal />
      </div>

      <Footer />
    </div>
  );
}
