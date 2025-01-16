import { create } from 'zustand';

interface ModalStore {
  // 모달창 열림/닫힘
  isOpen: boolean;
  // 모달창 열고 닫기 상태 업데이트
  openModal: () => void;
  closeModal: () => void;

  // 프로젝트 모달 데이터
  modalContent: {
    title: string;
    desc: string;
    thumnail?: string;
    link: string;
    github: string;
    role: string[];
    skill: string[];
    period: string;
  } | null;
  // 프로젝트 모달 데이터 상태 업데이트
  setData: (content: {
    title: string;
    desc: string;
    thumnail?: string;
    link: string;
    github: string;
    role: string[];
    skill: string[];
    period: string;
  }) => void;

  resetModalContent: () => void;
}

const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),

  modalContent: null,
  setData: (content) => set({ modalContent: content }),
  resetModalContent: () => set({ modalContent: null }),
}));

export default useModalStore;
