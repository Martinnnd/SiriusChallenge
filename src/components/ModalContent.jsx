import { Modal } from "./Modal";

export default function ModalContent({ show, onClose }) {
  return (
    <>
      <Modal show={show} onClose={onClose}>
        <div className="flex mt-8 ml-5 ">
          <img src="" className="w-11 h-11 rounded-full" alt="" />
          <p className="text-gray-500 mt-2 ml-2 text-lg">What´ Happening?</p>
        </div>
      </Modal>
    </>
  );
}
