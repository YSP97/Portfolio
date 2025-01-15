import QandA from '../components/QandA.tsx';

export default function AboutMe() {
  return (
    <section
      id="about-me"
      className="py-[104px] flex flex-col gap-10 px-20 items-center"
    >
      <h1 className="flex gap-4 text-[48px] font-sora">
        <span>About</span>
        <span className="font-extrabold">Me</span>
      </h1>
      <div className="flex gap-10">
        <img
          src="public/assets/profile.png"
          className="w-full max-w-[400px] h-fit shadow-sm"
        />
        <div className="flex flex-col gap-5">
          <QandA />
          <QandA />
        </div>
      </div>
    </section>
  );
}
