import { useEffect, useState } from 'react';
import QandA from '../components/QandA.tsx';
import supabase from '../utils/supabase.ts';

export default function AboutMe() {
  const [aboutMeData, setAboutMeData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAboutMeData = async () => {
      try {
        let { data: aboutMe, error } = await supabase
          .from('aboutMe')
          .select('*');

        if (error) throw error;
        setAboutMeData(aboutMe);
      } catch (err) {
        console.error('Fetch Error!:', err.message);
        setError(err.message);
      }
    };

    fetchAboutMeData();
  }, []);

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
          className="w-full max-w-[300px] h-fit border-[3px] rounded-xl shadow-lg shadow-zinc-500"
          alt="profile"
        />
        <div className="flex flex-col gap-5">
          {aboutMeData.map((item, index) => (
            <QandA data={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
