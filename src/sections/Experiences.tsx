import Experience from '../components/Experience.tsx';

export default function Experiences() {
  return (
    <section
      className="h-screen bg-black text-white flex flex-col items-center pt-[60px] gap-5"
    >
      <h1 className="text-5xl font-sora">
        My <span className="font-extrabold">Experience</span>
      </h1>
      <div className="py-10 flex flex-col gap-8 justify-center">
        <Experience />
      </div>
    </section>
  );
}
