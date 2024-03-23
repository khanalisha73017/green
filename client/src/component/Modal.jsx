import "../App.css";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex justify-center items-center shadow-md">
      <div className="bg-white p-4 rounded-md shadow-md relative">
        <button
          className="close-button absolute top-2 right-2"
          onClick={onClose}
        >
          &times;
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};

export { Modal };
