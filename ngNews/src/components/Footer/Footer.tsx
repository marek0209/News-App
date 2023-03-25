import React, { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import CurrentTime from "./CurrentTime";
import NewsCount from "./NewsCount";
import FooterText from "./FooterText";

const Footer: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const newsCount = useSelector((state: RootState) => state.news.news.length);
  const numberOfNewsArticles = useMemo(() => newsCount, [newsCount]);

  return (
    <footer className=" bg-white rounded-lg  m-4 dark:bg-gray-800">
      <div className="w-full mx-auto container md:p-6 p-4 md:flex md:items-center md:justify-between">
        <FooterText />
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <CurrentTime currentTime={currentTime} />
          <NewsCount numberOfNewsArticles={numberOfNewsArticles} />
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
