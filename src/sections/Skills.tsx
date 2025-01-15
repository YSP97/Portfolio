import Skill from '../components/Skill.tsx';

export default function Skills() {
  return (
    <section
      id="skills"
      className="flex flex-col h-screen font-sora items-center py-[60px]"
    >
      <h1 className="text-[48px]">
        My <span className="font-extrabold">Skills</span>
      </h1>

      <div className="flex flex-col gap-10 mt-10">
        <div className="flex w-[1216px]">
          <Skill icon="react" name="React" />
          <Skill icon="javascript" name="JavaScript" />
          <Skill icon="typescript" name="TypeScript" />
        </div>
        <div className="flex w-[1216px]">
          <Skill icon="zustand" name="Zustand" />
          <Skill icon="git" name="Git" />
          <Skill icon="sass" name="Sass/scss" />
          <Skill icon="tailwindcss" name="TailwindCSS" />
        </div>
      </div>
    </section>
  );
}
