import { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContent from './ModalContent';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-regular-svg-icons";

export default function PortalExample() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)}>
        <FontAwesomeIcon
                icon={faMessage}
                className="hover:text-red-600 mt-[7px]"
              />
      </button>
      {showModal && createPortal(
        <ModalContent onClose={() => setShowModal(false)} />,
        document.body
      )}
    </>
  );
}