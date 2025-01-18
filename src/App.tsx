import 'react';
import {
  AboutMe,
  Banner,
  ContactMe,
  Experiences,
  Projects,
  Skills,
} from '@/sections';
import { Header, MoveUp, Modal, ContactModal, Footer } from '@/components';


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
        <ContactMe />
      </div>
      <div className="fixed bottom-6 right-6 max-md:bottom-3">
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
