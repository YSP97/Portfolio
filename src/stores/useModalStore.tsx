import { create } from 'zustand';
import { Project } from '@/types/project';

interface ModalStore {
  isOpen: boolean;
  openModal: (content: Project) => void;
  closeModal: () => void;
  
  modalContent: Project | null;
}

const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  modalContent: null,
  
  openModal: (content) => set({ isOpen: true, modalContent: content }),
  closeModal: () => set({ isOpen: false, modalContent: null }),
}));

export default useModalStore;