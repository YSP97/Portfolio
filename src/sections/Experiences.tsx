import { useEffect, useState } from 'react';
import Experience from '../components/Experience.tsx';
import supabase from '../utils/supabase.ts';

export default function Experiences() {
  const [experience, setExperience] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        let { data: Experience, error } = await supabase
          .from('Experience')
          .select('*');

        if (error) throw error;
        setExperience(Experience);
      } catch (err) {
        console.error('Fetch Error!:', err.message);
        setError(err.message);
      }
    };

    fetchExperience();
  }, []);
  return (
    <section className="bg-black text-white flex flex-col items-center py-[104px] gap-5">
      <h1 className="text-5xl font-sora">
        My <span className="font-extrabold">Experience</span>
      </h1>
      <div className="py-10 flex flex-col gap-8 justify-center">
        {experience.map((item, index) => (
          <Experience data={item} key={index} />
        ))}
      </div>
    </section>
  );
}
