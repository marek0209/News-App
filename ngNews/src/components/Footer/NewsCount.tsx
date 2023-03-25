import React from "react";

interface Props {
  numberOfNewsArticles: number;
}

const NewsCount: React.FC<Props> = ({ numberOfNewsArticles }) => {
  return (
    <li className="ml-10">
      <p>Currently showing {numberOfNewsArticles} news articles</p>
    </li>
  );
};

export default NewsCount;
