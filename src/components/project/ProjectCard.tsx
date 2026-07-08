'use client';

import { Project } from '../../types/project';

export default function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="group relative rounded-xl border border-zinc-200 overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative h-40 overflow-hidden bg-zinc-100">
        {project.thumbnail && (
          <img
            src={project.thumbnail}
            alt={project.title}
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm flex items-center gap-1">
            자세히 보기 
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-medium text-sm">{project.title}</h3>
        <p className="text-xs text-zinc-500 mt-1">{project.period}</p>
        <div className="flex gap-1 mt-2 flex-wrap">
          {project.techStack.slice(0, 3).map((s) => (
            <span
              key={s}
              className="text-[11px] bg-zinc-100 text-zinc-600 px-2 py-0.5 rounded"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}