import Experience from '../components/Experience.tsx';
import { experience } from '../utils/abouMeData.ts';

export default function Experiences() {
  return (
    <section className="bg-black text-white flex flex-col items-center py-[104px] gap-5">
      <h1 className="text-5xl font-sora">
        My <span className="font-extrabold">Experience</span>
      </h1>
      <div className="py-10 flex flex-col gap-8 justify-center">
        {experience.map((item) => (
          <Experience data={item} />
        ))}
      </div>
    </section>
  );
}
