import React from "react";
import { removeSource } from "../../Utils/sourceRemove";

interface Props {
  title: string;
  author?: string | null;
  description?: string | null;
  url: string;
  onClose: () => void;
}

const ArticleModal: React.FC<Props> = ({
  title,
  author,
  description,
  url,
  onClose,
}) => {
  return (
    <>
      <div
        id="staticModal"
        data-modal-backdrop="static"
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center w-full h-full"
      >
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 max-w-lg w-full">
          {/* Modal header  */}
          <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {removeSource(title, author ? author : "")}
            </h3>

            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 focus:outline-none focus:shadow-outline-gray"
              onClick={onClose}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          {/* Modal body */}
          <div className="relative p-4">
            <div className="mb-4 text-sm text-gray-900">{description}</div>
            <div className="flex justify-between">
              {author && (
                <span className="mr-2 font-medium text-gray-600 dark:text-gray-300">
                  {author}
                </span>
              )}
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="text-base text-white  mr-5 btn bg-green-500 rounded p-2 hover:no-underline hover:bg-green-700"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background overlay */}
      <div
        data-modal-backdrop="static"
        aria-hidden="true"
        className="fixed inset-0 bg-black opacity-30 z-40"
        onClick={onClose}
      ></div>
    </>
  );
};

export default ArticleModal;
