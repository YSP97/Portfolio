import Contacts from '../components/Contacts.tsx';

export default function Banner() {
  return (
    <section className="h-screen bg-white px-20 pt-[190px]">
      <div className="text-5xl flex flex-col gap-5">
        <div>안녕하세요.</div>
        <div className="flex gap-4 font-extrabold">
          <span>프론트엔드</span>
          <span className="text-white text-stroke">개발자</span>
        </div>
        <div>
          <span className="font-extrabold">박윤선</span>
          <span>입니다.</span>
        </div>
        <p className="text-sm max-w-[600px] text-zinc-500">
          I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to specimen book. I'm Evren Shah Lorem Ipsum
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to specimen book.
        </p>

        <Contacts />
      </div>
    </section>
  );
}
