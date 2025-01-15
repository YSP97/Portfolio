import Project from '../components/Project.tsx';

export default function Projects() {
  const projectData = [
    {
      count: '01',
      title: 'TVING 자바스크립트 클론 프로젝트',
      img: '/assets/taing.png',
      desc: "I'm Flora Sheen Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
      link: '/',
      role: ['팀', '조장', '스크럼마스터'],
      skill: ['JavaScript', 'Sass/Scss', '반응형'],
    },
    {
      count: '02',
      title: '우리동네 스터디 구하기 플랫폼 "작심하루"',
      img: '/assets/jacksimharu.png',
      desc: "This is another dummy description for a Netflix clone. It's a great project to showcase advanced React and Tailwind skills.",
      link: '/',
      role: ['팀', '조장'],
      skill: ['React', 'tailwindCSS', 'Zustand'],
    },
    {
      count: '03',
      title: '나의 포트폴리오',
      desc: "This is another dummy description for a Netflix clone. It's a great project to showcase advanced React and Tailwind skills.",
      link: '/',
      role: ['개인'],
      skill: ['React', 'tailwindCSS', 'Zustand'],
    },
  ];

  return (
    <section
      id="project"
      className="bg-black text-white flex flex-col items-center py-[104px] px-[112px] gap-[20px]"
    >
      <h1 className="font-sora text-5xl">
        My <span className="font-extrabold">Project</span>
      </h1>
      {projectData.map((project, index) => (
        <Project
          key={index}
          index={index}
          count={project.count}
          title={project.title}
          desc={project.desc}
          link={project.link}
          img={project.img}
        />
      ))}
    </section>
  );
}
