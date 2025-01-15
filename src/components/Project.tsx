import ProjectLink from './ProjectLink.tsx';
import ProjectThumbnail from './ProjectThumbnail.tsx';

export default function Project({ index, count, title, desc, link, img }) {
  const isEven = index % 2 === 0; // 짝수 여부 확인

  return (
    <div
      className={`flex gap-20 items-center py-[60px] ${
        isEven ? 'flex-row' : 'flex-row-reverse'
      }`}
    >
      <ProjectThumbnail img={img} />
      <div className="flex flex-col gap-7 justify-center">
        <div className="font-sora text-5xl font-extrabold">{count}</div>
        <div className="font-semibold text-[32px]">{title}</div>
        <p className="text-zinc-500">{desc}</p>
        <ProjectLink link={link} />
      </div>
    </div>
  );
}
