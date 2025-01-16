import useContactStore from '../stores/useContactStore.tsx';
import useModalStore from '../stores/useModalStore.tsx';

export default function ContactModal() {
  const { isOpen, closeModal, contactData } = useContactStore();

  console.log(isOpen);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col gap-6 max-w-lg w-full">
        {/* 제목 섹션 */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 pb-2">
            {contactData.title}
          </h2>
          <hr className="border-gray-300" />
          <p className="text-gray-600 mt-2">{contactData.phone}</p>
        </div>

        {/* 버튼 섹션 */}
        <div className="flex justify-end">
          <button
            onClick={closeModal}
            className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
