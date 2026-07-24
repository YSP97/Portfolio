export default function ProjectThumbnail({ img, title }) {
  return (
    <img
      src={img}
      className="max-w-[530px]  rounded-lg shadow-md max-sm:max-w-[350px]"
      alt={`${title} project thumbnail`}
    />
  );
}