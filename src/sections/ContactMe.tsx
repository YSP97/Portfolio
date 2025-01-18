import Contacts from '../components/Contacts';

export default function ContactMe() {
  return (
    <section
      id="contact-me"
      className="flex flex-col items-center h-screen bg-white py-[104px] gap-10 justify-between"
    >
      <h1 className="flex font-sora font-extrabold text-5xl gap-4">
        Contact <span className="text-white text-stroke"> Me!</span>
      </h1>
      <p className="text-lg flex gap-3">
        함께 작업하고 싶거나, 문의하실 것이 있으시다면 아래로 연락주세요!
        <span className='bg-black text-white px-1'> 새로운 도전을 기다리고 있습니다!</span>
      </p>

      <div className="font-sora text-3xl pt-24">pus9717@gmail.com</div>
      <Contacts />
    </section>
  );
}
