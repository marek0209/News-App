import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { Country } from "../../types/countryTypes";
import { fetchNews } from "../../slices/newsSlice";
import { News } from "../../types/newsTypes";
import { removeSource } from "../../Utils/sourceRemove";

import { formatDate } from "../../Utils/dateFormatter";
import FeaturedNews from "./FeaturedNews";

const NewsContainer = () => {
  const dispatch = useDispatch();

  const { news, loading, error } = useSelector(
    (state: RootState) => state.news
  );

  let currentCountry: Country = { countryCode: "pl", label: "Poland" };

  useEffect(() => {
    dispatch(fetchNews(currentCountry));
  }, []);

  if (loading) {
    return <>Loading...</>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="text-gray-900 pt-12 pr-0 pb-14 pl-0 bg-white">
        <div
          className="w-full pt-4 pr-5 pb-6 pl-5 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16
      max-w-7xl"
        >
          {news.length > 0 && <FeaturedNews news={news[0]} />}
          <div class="grid grid-cols-12 sm:px-5 gap-x-8 gap-y-16">
            {news.slice(1).map((n: News) => (
              <div key={n.url}>
                <h1>{removeSource(n.title, n.author ?? "")}</h1>
                {n.author}
                {formatDate(n.publishedAt)}
                <a href={n.url}>Read more</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsContainer;
