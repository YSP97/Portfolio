import { Link } from 'react-scroll';

export default function Header() {
  return (
    <div className="flex flex-row justify-between py-6 px-20 items-center bg-white">
      <div className="flex flex-row gap-8 font-semibold select-none cursor-pointer">
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
          Contact me
        </Link>
      </div>
      <a
        href="/assets/resume.hwp"
        download="resume.hwp"
        className="flex flex-row items-center gap-2 bg-black text-white rounded py-2 px-4 hover:bg-zinc-600"
        aria-label="이력서 다운로드"
      >
        <div className="font-semibold">Resume</div>
        <svg className="w-[15px] h-[15px]">
          <use href="/sprite.svg#download" />
        </svg>
      </a>
    </div>
  );
}
