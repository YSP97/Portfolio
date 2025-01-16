export default function Experience({ data }) {
  return (
    <div className="max-w-[1168px] w-full py-[30px] px-6 border-[2px] rounded-[10px] border-zinc-500 flex flex-col gap-7 hover:bg-zinc-800">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-7">
          <img src={data.icon} className="w-10 rounded-full" />
          <span className="font-semibold">{data.name}</span>
        </div>
        <span className="font-sora">{data.peroid}</span>
      </div>
      <p className="text-zinc-300">
        {data.desc}
      </p>
    </div>
  );
}
