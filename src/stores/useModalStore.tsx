import { create } from 'zustand';

const useModalStore = create((set) => ({
  isOpen: false, // 모달의 상태 (열림/닫힘)

  // 상태를 토글하는 함수
  toggleModal: () => set((state) => ({ isOpen: !state.isOpen })),

  // 특정 상태로 설정하는 함수
  setIsOpen: (value) => set({ isOpen: value }),
}));

export default useModalStore;
