import { createPortal } from "react-dom";

export const Modal = ({ show, onClose, children }) => {
  const handleClose = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <>
      {show && (
        <div
          onClick={handleClose}
          className={
            "w-screen h-full fixed top-0 left-0 bg-black bg-opacity-10 z-50 flex justify-center items-center"
          }
        >
          {children}
        </div>
      )}
    </>,
    document.getElementById("modal")
  );
};
