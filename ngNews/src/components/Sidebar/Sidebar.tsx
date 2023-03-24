import React from "react";
import { slide as Menu } from "react-burger-menu";
const SideBar = () => {
  return (
    <>
      <Menu isOpen={false} right noOverlay>
        <div>
          <aside
            className="fixed top-0 right-0 w-64 h-full z-40"
            aria-label="Sidenav"
          >
            <div className="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <button
                      type="button"
                      className="block md:hidden lg:hidden text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Pop up
                    </button>
                  </a>
                </li>
                <li>
                  <button
                    type="button"
                    className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    aria-controls="dropdown-pages"
                    data-collapse-toggle="dropdown-pages"
                  >
                    <span className="flex-1 ml-3 text-left whitespace-nowrap">
                      Search Here
                    </span>
                  </button>
                  <ul id="dropdown-pages" className="hidden py-2 space-y-2">
                    <li>
                      <a
                        href="#"
                        className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        Poland
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        Germany
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        United States
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>

              <ul className="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
                  >
                    <span className="ml-3">United States</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
                  >
                    <span className="ml-3">Poland</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
                  >
                    <span className="ml-3">Germany</span>
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </Menu>
    </>
  );
};

export default SideBar;
