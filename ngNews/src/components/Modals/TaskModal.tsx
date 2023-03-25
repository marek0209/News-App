import React, { MouseEvent } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

function TaskModal({ isOpen, onClose }: ModalProps): JSX.Element | null {
  const handleClickOutside = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      id="staticModal"
      className="fixed inset-0 z-50 flex justify-center items-center"
      aria-hidden="true"
      data-modal-backdrop="static"
      onClick={handleClickOutside}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative w-full h-full max-w-2xl md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <button
              type="button"
              className="inline-flex items-center p-1.5 mr-auto text-sm text-gray-400 rounded-lg hover:bg-gray-200 hover:text-gray-900 bg-transparent"
              data-modal-hide="defaultModal"
              onClick={onClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                />
              </svg>
            </button>
            <h3 className="text-xl font-semibold text-black-900 dark:text-white">
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
          <div className="flex items-center p-6 space-x-2 border-t rounded-b border-gray-200 dark:border-gray-600" />
        </div>
      </div>
    </div>
  );
}

export default TaskModal;
