import useModalStore from '../stores/useModalStore.tsx';

export default function Modal() {
  const { isOpen, toggleModal } = useModalStore();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md">
        <h2 className="text-xl font-bold">Modal Title</h2>
        <p className="mt-4">This is the modal content.</p>
        <button
          onClick={toggleModal}
          className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-zinc-500"
        >
          Close
        </button>
      </div>
    </div>
  );
}
