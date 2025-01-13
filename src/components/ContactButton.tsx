export default function ContactButton({ icon }) {
  return (
    <a
      href="https://github.com/YSP97"
      className="bg-white w-14 h-14 border-[3px] border-black rounded hover:bg-black hover:text-white cursor-pointer flex justify-center items-center"
    >
      <svg className="w-5 h-5">
        <use href={`/sprite.svg#${icon}`} />
      </svg>
    </a>
  );
}
