import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { Country } from "../../types/countryTypes";
import { fetchNews } from "../../slices/newsSlice";
import FeaturedNews from "./FeaturedNews";
import StandardNews from "./StandardNews";

const NewsContainer = () => {
  const dispatch = useDispatch();

  const { news, loading, error } = useSelector(
    (state: RootState) => state.news
  );

  const currentCountry = useSelector(
    (state: RootState) => state.country.currentCountry
  );

  useEffect(() => {
    dispatch(
      fetchNews(
        currentCountry ? currentCountry : { countryCode: "pl", label: "Poland" }
      )
    );
  }, [currentCountry, dispatch]);

  if (loading) {
    return <>Loading...</>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <h2>News for {currentCountry?.label}</h2>
      <div className="text-gray-900 pt-12 pr-0 pb-14 pl-0 bg-white w-full">
        <div
          className="pt-10 pr-5 pb-6 pl-5 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16
      max-w-7xl"
        >
          {news.length > 0 && <FeaturedNews news={news[0]} />}
          <div className="grid sm:px-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-x-8 gap-y-16">
            <StandardNews news={news.slice(1)} />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsContainer;
