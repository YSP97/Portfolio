export default function Skill({ icon, name }) {
  return (
    <div
      className="w-[186px] h-[186px] bg-white rounded flex flex-col justify-center items-center mx-auto gap-8 hover:bg-black hover:text-white stroke stroke-white hover:stroke-black py-[37px] border-[2px] border-black"
      aria-label={`${name}`}
    >
      <svg className="w-[56px] h-[56px]">
        <use href={`/sprite.svg#icon-${icon}`} />
      </svg>
      <div className="mt-2 text-center font-extrabold">{name}</div>
    </div>
  );
}
