import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TaskModal from "../Modals/TaskModal";
import ViewSwitcher from "./ViewSwitcher";

const Header = () => {
  const [taskModalOpen, setTaskModalOpen] = useState(false);

  return (
    <>
      <TaskModal
        isOpen={taskModalOpen}
        onClose={() => setTaskModalOpen(false)}
      />
      <div className="fixed top-0 bg-gray-800 w-full z-10 flex">
        <nav className="  border-gray-800 px-2 sm:px-4 py-2.5  bg-gray-800">
          <div className="container flex flex-wrap items-center justify-between mx-auto">
            <Link to="/" className="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-6 mr-3 sm:h-9"
                alt="NgNews Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
                NgNews
              </span>
            </Link>
            <div className="flex md:order-2">
              <ViewSwitcher />
              <button
                onClick={() => setTaskModalOpen(true)}
                type="button"
                className="hidden md:block lg:block  text-white  bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center mr-3 md:mr-0 "
              >
                Pop up
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
