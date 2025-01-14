import QandA from '../components/QandA.tsx';

export default function AboutMe() {
  return (
    <section id="about-me" className="my-[60px] flex gap-20 px-20 items-center">
      <img
        src="public/assets/profile.png"
        className="max-w-full w-[400px] h-fit shadow-sm"
      />
      <div className="flex flex-col gap-5">
        <div className="flex gap-4 text-[48px] font-sora">
          <span>About</span>
          <span className="font-extrabold">Me</span>
        </div>

        <QandA />
        <QandA />
      </div>
    </section>
  );
}
