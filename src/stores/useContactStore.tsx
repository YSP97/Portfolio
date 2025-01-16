import { create } from 'zustand';

interface ContactStore {
  // 모달창 열림/닫힘
  isOpen: boolean;
  // 모달창 열고 닫기 상태 업데이트
  openModal: () => void;
  closeModal: () => void;

  contactData: {
    title: string;
    phone: string;
  };

  setContactData: (data: { title: string; phone: string }) => void;
}

const useContactStore = create<ContactStore>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),

  contactData: null,

  setContactData: (data) => set({ contactData: data }),
}));

export default useContactStore;
