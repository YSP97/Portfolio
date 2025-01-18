import { useEffect, useRef } from 'react';
import useModalStore from '../stores/useModalStore.tsx';
import { gsap } from 'gsap';
import Badge from './Badge.tsx';

export default function Modal() {
  const { isOpen, closeModal, modalContent } = useModalStore();
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      // 모달 애니메이션 실행
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1, ease: 'power3.out' }
      );
    }
  }, [isOpen]);

  if (!isOpen || !modalContent) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div
        ref={modalRef}
        className="bg-white rounded-lg shadow-lg p-6 flex gap-6 max-w-[1000px]"
      >
        <img
          src={modalContent.thumnail}
          alt={modalContent.title}
          className="w-1/2 h-auto rounded-lg object-cover"
        />

        <div className="flex flex-col w-2/3 gap-4">
          {/* 프로젝트 제목 */}
          <h2 className="text-2xl font-bold">{modalContent.title}</h2>

          {/* 프로젝트 기간 */}
          <div className="font-sora">{modalContent.period}</div>

          {/* 역할 배지 */}
          <div className="flex gap-2 flex-wrap">
            {modalContent.role.map((role, index) => (
              <Badge key={index} content={`#${role}`} />
            ))}
          </div>

          {/* 설명 */}
          <p className="text-gray-700">{modalContent.desc}</p>

          {/* 스킬 섹션 */}
          <div className="flex gap-2">
            <Badge content="Skills" style="bg-black text-white" />
            <div className="flex gap-2 flex-wrap">
              {modalContent.skill.map((skill, index) => (
                <Badge key={index} content={skill} />
              ))}
            </div>
          </div>

          {/* 링크 섹션 */}
          <div className="flex gap-4 w-fit items-center">
            {/* GitHub 링크 */}
            <a
              className="flex items-center justify-center w-10 h-10 rounded-full transition hover:text-zinc-500"
              href={modalContent.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-6 h-6">
                <use href="/sprite.svg#github" />
              </svg>
            </a>
            {/* 배포 링크 */}
            <a
              className="flex items-center justify-center w-10 h-10 bg-black hover:bg-zinc-500 rounded-full text-white transition"
              href={modalContent.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-6 h-6">
                <use href="/sprite.svg#ReadMore" />
              </svg>
            </a>
            {/* 노션 링크 */}
            <a
              href={modalContent.detail}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Badge
                content="상세 보기"
                style="bg-zinc-100 border-[2px] border-black text-black"
              />
            </a>
          </div>

          {/* 닫기 버튼 */}
          <div className="flex justify-end">
            <button
              onClick={closeModal}
              className="bg-black text-white px-4 py-2 rounded hover:bg-zinc-500 transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
