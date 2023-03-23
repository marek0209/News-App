import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { Country } from "../../types/countryTypes";
import { fetchNews } from "../../slices/newsSlice";
import { News } from "../../types/newsTypes";
import { removeSource } from "../../Utils/sourceRemove";

import { formatDate } from "../../Utils/dateFormatter";

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
      {news.map((n: News) => (
        <div key={n.url}>
          <h1>{removeSource(n.title, n.author)}</h1>
          {n.author}
          {formatDate(n.publishedAt)}
          <a href={n.url}>Read more</a>
        </div>
      ))}
    </>
  );
};

export default NewsContainer;
