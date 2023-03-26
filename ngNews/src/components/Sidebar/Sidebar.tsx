import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { setCurrentCountry } from "../../slices/countrySlice";
import countries from "../../Utils/countryList";
import { Country } from "../../types/countryTypes";
import { Link } from "react-router-dom";
import TaskModal from "../Modals/TaskModal";

const Sidebar: React.FC = () => {
  const [taskModalOpen, setTaskModalOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const selectedCountry = useSelector(
    (state: RootState) => state.country.currentCountry
  );

  const dispatch = useDispatch();

  const handleCountryClick = (country: Country) => {
    dispatch(setCurrentCountry(country));
  };

  const filteredCountries = countries.filter((country) =>
    country.label.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <TaskModal
        isOpen={taskModalOpen}
        onClose={() => setTaskModalOpen(false)}
      />
      {!taskModalOpen && (
        <Menu isOpen={false} right noOverlay>
          <div>
            <aside
              className="fixed top-0 right-0 w-64 h-full z-40"
              aria-label="Sidenav"
            >
              <div className="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <ul className="space-y-2 flex justify-center flex-wrap">
                  <li>
                    <button
                      onClick={() => setTaskModalOpen(true)}
                      type="button"
                      className="block md:hidden lg:hidden text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-green-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
                    >
                      Pop up
                    </button>
                  </li>

                  <li>
                    <span className="flex-1 ml-3 text-left whitespace-nowrap">
                      <input
                        type="text"
                        placeholder="Search for a country"
                        value={searchValue}
                        className="outline-none"
                        onChange={(e) => setSearchValue(e.target.value)}
                      />
                    </span>
                  </li>
                </ul>

                <ul className="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
                  {filteredCountries.map((country) => (
                    <li key={country.countryCode}>
                      <Link
                        to={`/country/${country.countryCode}`}
                        onClick={() => handleCountryClick(country)}
                        className="inline-block p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
                      >
                        <span className="ml-3 flex items-center">
                          <img
                            className="mr-2"
                            src={`https://flagcdn.com/20x15/${country.countryCode}.png`}
                            alt={country.label}
                          />
                          <span>{country.label}</span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </Menu>
      )}
      )
    </>
  );
};

export default Sidebar;
