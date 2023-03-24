import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Footer: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const newsCount = useSelector((state: RootState) => state.news.news.length);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <footer className=" bg-white rounded-lg  m-4 dark:bg-gray-800">
      <div className="w-full mx-auto container md:p-6 p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a
            href="https://www.linkedin.com/in/marek-urbaniec-5ba12a200/"
            className="hover:underline"
          >
            NgNews by Marek Urbaniec
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <p>Current time: {currentTime.toLocaleTimeString()}</p>
          </li>
          <li className="ml-10">
            <p>Currently showing {newsCount} news articles</p>
          </li>
          <li></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
