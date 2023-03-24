import React, { useState } from "react";
import { News } from "../../types/newsTypes";
import { removeSource } from "../../Utils/sourceRemove";
import { formatDate } from "../../Utils/dateFormatter";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import ArticleModal from "../Modals/ArticleModal";

interface Props {
  news: News[];
}

const StandardNews: React.FC<Props> = ({ news }) => {
  const view = useSelector((state: RootState) => state.view.view);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedNews, setSelectedNews] = useState<News | null>(null);

  const handleOpenModal = (n: News) => {
    setSelectedNews(n);
    setModalVisible(true);
  };
  const handleCloseModal = () => {
    setSelectedNews(null);
    setModalVisible(false);
  };

  if (view === "grid")
    return (
      <>
        {modalVisible && selectedNews && (
          <ArticleModal
            title={selectedNews.title}
            author={selectedNews.author}
            description={selectedNews.description}
            url={selectedNews.url}
            onClose={handleCloseModal}
          />
        )}
        {news.map((n: News) => (
          <div key={n.url}>
            <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
              <img
                src="https://archive.org/download/placeholder-image/placeholder-image.jpg"
                className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-"
                alt="image placeholder for article"
              />
              <p
                className="bg-green-500 flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3
            rounded-full uppercase "
              >
                News
              </p>
              <div
                className="text-lg font-bold sm:text-xl md:text-2xl cursor-pointer"
                onClick={() => handleOpenModal(n)}
              >
                {removeSource(n.title, n.author ?? "")}
              </div>
              <div className="pt-2 pr-0 pb-0 pl-0">
                <div className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline">
                  {n.author}
                </div>
                <p className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-1">
                  · {formatDate(n.publishedAt)} ·
                </p>
                <a
                  className="inline text-xs font-medium text-gray-300 mt-0 mr-1 mb-0 ml-1 underline"
                  href={n.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </>
    );

  return (
    <>
      {modalVisible && selectedNews && (
        <ArticleModal
          title={selectedNews.title}
          author={selectedNews.author}
          description={selectedNews.description}
          url={selectedNews.url}
          onClose={handleCloseModal}
        />
      )}

      {news.map((n: News) => (
        <div key={n.url} className="dark:bg-gray-800 dark:text-gray-100">
          <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
            <div className="flex items-center justify-between">
              <span className="inline text-sm font-medium mt-0 mr-1 mb-0 ml-1">
                {formatDate(n.publishedAt)}
              </span>
              <p className="bg-green-500 flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3 rounded-full uppercase ">
                News
              </p>
            </div>
            <div
              className="text-lg font-bold sm:text-xl md:text-2xl   "
              onClick={() => handleOpenModal(n)}
            >
              {removeSource(n.title, n.author ?? "")}
              <p className="mt-2">{n.content}</p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div>
                <span className="text-sm font-medium inline">
                  Source: {n.author}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default StandardNews;
