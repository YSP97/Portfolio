import { useEffect, useRef } from 'react';
import useModalStore from '../stores/useModalStore.tsx';
import { gsap } from 'gsap';
import Badge from './Badge.tsx';
import Pdf from './Pdf.tsx';
import { Document, Page } from 'react-pdf';

export default function Modal() {
  const { isOpen, closeModal, modalContent } = useModalStore();
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1, ease: 'power3.out' }
      );
    }
  }, [isOpen]);

  if (!isOpen || !modalContent) return null;

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div className="flex flex-col bg-white rounded-md gap-5 p-6 max-w-[90%] max-h-[90vh] overflow-auto">
        <div className="flex gap-3 justify-end">
          <a
            href="/"
            className="bg-gray-400 rounded px-4 py-2 text-white hover:bg-zinc-500"
          >
            다운로드
          </a>
          <button
            onClick={closeModal}
            className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-zinc-500 transition"
            aria-label="모달 닫기"
          >
            Close
          </button>
        </div>
        <Pdf url={modalContent.portfolio} />
      </div>
    </div>
  );
}
