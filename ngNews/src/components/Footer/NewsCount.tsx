import React from "react";

interface Props {
  numberOfNewsArticles: number;
}

const NewsCount: React.FC<Props> = ({ numberOfNewsArticles }) => {
  return (
    <li>
      <p className="text-center">
        Currently showing {numberOfNewsArticles} news articles
      </p>
    </li>
  );
};

export default NewsCount;
