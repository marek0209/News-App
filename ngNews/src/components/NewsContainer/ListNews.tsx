import React, { useState } from "react";
import { News } from "../../types/newsTypes";
import { removeSource } from "../../Utils/sourceRemove";
import { formatDate } from "../../Utils/dateFormatter";
import ArticleModal from "../Modals/ArticleModal";

interface Props {
  news: News[];
}

const ListNews: React.FC<Props> = ({ news }) => {
  const [modalNews, setModalNews] = useState<News | null>(null);

  const handleOpenModal = (n: News) => setModalNews(n);
  const handleCloseModal = () => setModalNews(null);

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
      {news.map((n: News) => (
        <div
          key={n.url}
          className="dark:bg-gray-800 dark:text-gray-100"
          onClick={() => handleOpenModal(n)}
        >
          <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
            <div className="flex items-center justify-between">
              <span className="inline text-sm font-medium mt-0 mr-1 mb-0 ml-1">
                {formatDate(n.publishedAt)}
              </span>
              <p className="bg-green-500 flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3 rounded-full uppercase ">
                News
              </p>
            </div>
            <div className="text-lg font-bold sm:text-xl md:text-2xl cursor-pointer">
              {removeSource(n.title, n.author ?? "")}
            </div>
            <div className="pt-2 pr-0 pb-0 pl-0">
              <p className="text-sm font-medium">{n.description}</p>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <span className="text-sm font-medium inline">
                    Source: {n.author}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ListNews;
