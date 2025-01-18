import { useEffect, useRef } from 'react';
import useContactStore from '../stores/useContactStore.tsx';
import { gsap } from 'gsap';

export default function ContactModal() {
  const { isOpen, closeModal, contactData } = useContactStore();
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      // 모달 애니메이션
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1, ease: 'power3.out' }
      );
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div
        ref={modalRef}
        className="bg-white rounded-lg shadow-lg flex flex-col gap-6 max-w-lg w-full p-7"
      >
        {/* 제목 섹션 */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            {contactData.title}
          </h2>
          <p className="text-gray-600 mt-4">{contactData.phone}</p>
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
