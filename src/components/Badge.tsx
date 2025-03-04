export default function Badge({
  content,
  style,
}: {
  content: string;
  style?: string;
}) {
  return (
    <div
      className={`px-2 py-[2px] w-fit rounded-2xl ${
        style ? style : 'bg-zinc-500 text-white'
      }`}
    >
      {content}
    </div>
  );
}
