import { useEffect, useState } from 'react';
import Project from '../components/Project.tsx';
import supabase from '../utils/supabase.ts';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data, error } = await supabase.from('project').select('*');
        if (error) throw error;
        setProjects(data);
      } catch (err) {
        console.error('Fetch Error!:', err.message);
        setError(err.message);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section
      id="project"
      className="bg-black text-white flex flex-col items-center py-[104px] px-[112px] gap-[20px]"
    >
      <h1 className="font-sora text-5xl">
        My <span className="font-extrabold">Project</span>
      </h1>
      {error && <p className="text-red-500">데이터가 존재하지 않아요.</p>}
      {projects.length > 0 ? (
        projects.map((project, index) => (
          <Project key={index} index={index} projectData={project} />
        ))
      ) : (
        <p>Loading projects...</p>
      )}
    </section>
  );
}
