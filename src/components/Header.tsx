import { Link } from 'react-scroll';
import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // GSAP 애니메이션 처리
  useEffect(() => {
    if (menuOpen) {
      gsap.to(menuRef.current, {
        duration: 0.5,
        opacity: 1,
        y: 0,
        pointerEvents: 'auto',
        ease: 'power3.out',
      });
    } else {
      gsap.to(menuRef.current, {
        duration: 0.5,
        opacity: 0,
        y: -50,
        pointerEvents: 'none',
        ease: 'power3.in',
      });
    }
  }, [menuOpen]);

  return (
    <div>
      {/* 헤더 */}
      <div className="flex flex-row justify-between py-6 px-20 items-center bg-white max-md:px-4 max-md:py-4 max-lg:px-6">
        <div className="flex flex-row gap-12 font-semibold select-none cursor-pointer">
          <a href="/">
            <img src="/YSPlogo.svg" className="w-12" alt="logo" />
          </a>
          <div className="flex flex-row gap-8 max-md:hidden">
            <Link to="about-me" smooth={true} duration={700}>
              About Me
            </Link>
            <Link to="skills" smooth={true} duration={700}>
              Skills
            </Link>
            <Link to="project" smooth={true} duration={700}>
              Project
            </Link>
            <Link to="contact-me" smooth={true} duration={700}>
              Contact Me
            </Link>
          </div>
        </div>
        <a
          href="/assets/resume.hwp"
          download="resume.hwp"
          className="flex flex-row items-center gap-2 bg-black text-white rounded py-2 px-4 hover:bg-zinc-600 max-md:hidden"
          aria-label="이력서 다운로드"
        >
          <div className="font-semibold">Resume</div>
          <svg className="w-[15px] h-[15px]">
            <use href="/sprite.svg#download" />
          </svg>
        </a>
        {/* 햄버거 버튼 */}
        <button onClick={toggleMenu} className="md:hidden">
          <svg className="w-[30px] h-[30px]">
            <use href="/sprite.svg#hamburger" />
          </svg>
        </button>
      </div>

      {/* 햄버거 메뉴 */}
      <div
        ref={menuRef}
        className="absolute right-0 w-[200px] bg-white shadow-lg flex flex-col items-end gap-4 py-4 z-50 rounded-sm pr-6 md:hidden"
        style={{
          opacity: 0,
          transform: 'translateY(-50px)',
          pointerEvents: 'none',
        }}
      >
        <Link
          to="about-me"
          smooth={true}
          duration={700}
          className="text-lg font-semibold hover:underline"
          onClick={() => setMenuOpen(false)}
        >
          About Me
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={700}
          className="text-lg font-semibold hover:underline"
          onClick={() => setMenuOpen(false)}
        >
          Skills
        </Link>
        <Link
          to="project"
          smooth={true}
          duration={700}
          className="text-lg font-semibold hover:underline"
          onClick={() => setMenuOpen(false)}
        >
          Project
        </Link>
        <Link
          to="contact-me"
          smooth={true}
          duration={700}
          className="text-lg font-semibold hover:underline"
          onClick={() => setMenuOpen(false)}
        >
          Contact Me
        </Link>
        <a
          href="/assets/resume.hwp"
          download="resume.hwp"
          className="text-lg font-semibold bg-black text-white rounded py-2 px-4 hover:bg-zinc-600"
          aria-label="이력서 다운로드"
          onClick={() => setMenuOpen(false)}
        >
          Resume
        </a>
      </div>
    </div>
  );
}
