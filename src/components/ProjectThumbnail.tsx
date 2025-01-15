export default function ProjectThumbnail({img}) {
  return (
    <img
      src={img}
      className="max-w-[530px]  rounded-lg shadow-md"
      alt="Project Thumbnail"
    />
  );
}
