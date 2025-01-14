export default function Experience() {
  return (
    <div className="max-w-[1168px] w-full py-[30px] px-6 border-[2px] rounded-[10px] border-zinc-500 flex flex-col gap-7 hover:bg-zinc-800">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-7">
          <img src="/assets/likelion.png" className="w-10 rounded-full" />
          <span className="font-semibold">
            멋쟁이 사자처럼 프론트엔드 스쿨 10기
          </span>
        </div>
        <span className="font-sora">Apr 2024 - Sep 2024</span>
      </div>
      <p className='text-zinc-300'>
        As a Senior Software Engineer at Google, I played a pivotal role in
        developing innovative solutions for Google's core search algorithms.
        Collaborating with a dynamic team of engineers, I contributed to the
        enhancement of search accuracy and efficiency, optimizing user
        experiences for millions of users worldwide.
      </p>
    </div>
  );
}
