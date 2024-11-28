export default function ModalContent({ onClose }) {
    return (
      <div className="modal h-80 bg-red-700 text-center w-2/4">
        <div>I'm a modal dialog</div>
        <button onClick={onClose}>Close</button>
      </div>
    );
  }
  