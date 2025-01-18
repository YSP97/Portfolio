export default function ProjectThumbnail({ img, title }) {
  return (
    <img
      src={img}
      className="max-w-[530px]  rounded-lg shadow-md"
      alt={`${title} project thumbnail`}
    />
  );
}
