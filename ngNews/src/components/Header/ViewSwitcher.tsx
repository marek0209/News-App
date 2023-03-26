import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchView, ViewType } from "../../slices/viewSlice";
import { RootState } from "../../store";

const ViewSwitcher = () => {
  const dispatch = useDispatch();
  const view = useSelector((state: RootState) => state.view);

  const handleGridClick = () => {
    if (view.view !== ViewType.Grid) {
      dispatch(switchView());
    }
  };

  const handleListClick = () => {
    if (view.view !== ViewType.List) {
      dispatch(switchView());
    }
  };

  return (
    <>
      <div className="  mr-10 bg-gray-800 text-sm text-gray-500 leading-none  inline-flex mr-50">
        <button
          onClick={handleGridClick}
          className={
            "inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-slate-50 focus:text-blue-500 rounded-r-full px-4 py-2" +
            (view.view === ViewType.Grid ? "active text-blue-500" : "")
          }
          id="grid"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="fill-current w-4 h-4 mr-2"
          >
            <rect x="3" y="3" width="7" height="7"></rect>
            <rect x="14" y="3" width="7" height="7"></rect>
            <rect x="14" y="14" width="7" height="7"></rect>
            <rect x="3" y="14" width="7" height="7"></rect>
          </svg>
          <span>Grid</span>
        </button>
        <button
          onClick={handleListClick}
          className={
            "inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-slate-50 focus:text-blue-500 rounded-r-full px-4 py-2" +
            (view.view === ViewType.List ? "active text-blue-500" : "")
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="fill-current w-4 h-4 mr-2"
          >
            <line x1="8" y1="6" x2="21" y2="6"></line>
            <line x1="8" y1="12" x2="21" y2="12"></line>
            <line x1="8" y1="18" x2="21" y2="18"></line>
            <line x1="3" y1="6" x2="3.01" y2="6"></line>
            <line x1="3" y1="12" x2="3.01" y2="12"></line>
            <line x1="3" y1="18" x2="3.01" y2="18"></line>
          </svg>
          <span>List</span>
        </button>
      </div>
    </>
  );
};

export default ViewSwitcher;
