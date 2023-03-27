import React, { useState } from "react";
import { News } from "../../types/newsTypes";
import { removeSource } from "../../Utils/sourceRemove";
import { formatDate } from "../../Utils/dateFormatter";
import ArticleModal from "../Modals/ArticleModal";

interface Props {
  news: News[];
}

const GridNews: React.FC<Props> = ({ news }) => {
  const [modalNews, setModalNews] = useState<News | null>(null);

  const handleOpenModal = (n: News) => setModalNews(n);
  const handleCloseModal = () => setModalNews(null);

  const renderArticle = (n: News) => (
    <div key={n.url}>
      <div
        className="flex flex-col justify-between h-full col-span-12 space-y-3 sm:col-span-6 xl:col-span-4 items-start"
        onClick={() => handleOpenModal(n)}
      >
        <img
          src={
            n.urlToImage
              ? n.urlToImage
              : "https://archive.org/download/placeholder-image/placeholder-image.jpg"
          }
          className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm h-56 btn-"
          alt="image placeholder for article"
        />
        <p className="bg-green-500 flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3 rounded-full uppercase ">
          News
        </p>
        <div className="text-lg font-bold sm:text-xl md:text-2xl cursor-pointer">
          {removeSource(n.title, n.author ?? "")}
        </div>
        <div>{n.description}</div>
        <div className="pt-2 pr-0 pb-0 pl-0">
          <div className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline">
            {n.author ?? "Unknown"}
          </div>
          <p className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-1">
            · {formatDate(n.publishedAt)} ·
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {modalNews && (
        <ArticleModal
          title={modalNews.title}
          author={modalNews.author}
          description={modalNews.description}
          url={modalNews.url}
          onClose={handleCloseModal}
        />
      )}
      {news.map(renderArticle)}
    </>
  );
};

export default GridNews;
