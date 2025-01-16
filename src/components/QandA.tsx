export default function QandA({ data }) {
  return (
    <div className="flex flex-col gap-3 text1">
      <div className="flex gap-3 text-[30px]">
        <span className="font-semibold font-sora">Q.</span>
        <span className="font-semibold">{data.question}</span>
      </div>
      <div className="flex items-start gap-5 pl-24">
        <span className="text-[30px] font-semibold font-sora">A. </span>
        <p className="text-zinc-500 mt-1">{data.answer}</p>
      </div>
    </div>
  );
}
