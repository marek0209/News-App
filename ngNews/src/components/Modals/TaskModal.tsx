import React from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

function TaskModal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) {
    return null;
  }

  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleClickOutside}
      id="staticModal"
      data-modal-backdrop="static"
      aria-hidden="true"
      className="fixed top-20 left-0 right-0 z-40 flex justify-center items-center w-full h-full"
    >
      <div className="relative w-full h-full max-w-2xl md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <button
              onClick={onClose}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 mr-auto inline-flex items-center"
              data-modal-hide="defaultModal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <h3 className="text-xl  font-semibold text-black-900 dark:text-white">
              Element zadania rekrutacyjnego
            </h3>
          </div>

          <div className="p-6 space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Praca nad tym projektem była dla mnie świetną zabawą, cała budowa
              aplikacji przebiegała dość bezproblemowo jednak wcześniej nie
              korzystałem z redux toolkit i na początku sprawiał on trudności w
              typowaniu. Wcześniej pracowałem z reduxem jednak bez toolkit.
            </p>
          </div>

          <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"></div>
        </div>
      </div>
    </div>
  );
}

export default TaskModal;
