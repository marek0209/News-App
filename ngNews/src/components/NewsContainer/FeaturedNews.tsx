import React, { useState } from "react";
import { News } from "../../types/newsTypes";
import { removeSource } from "../../Utils/sourceRemove";
import { formatDate } from "../../Utils/dateFormatter";
import ArticleModal from "../Modals/ArticleModal";

interface Props {
  news: News;
}
const FeaturedNews: React.FC<Props> = ({ news }) => {
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
  return (
    <>
      <div className=" flex flex-col items-center sm:px-5 md:flex-row ">
        {modalVisible && selectedNews && (
          <ArticleModal
            title={selectedNews.title}
            author={selectedNews.author}
            description={selectedNews.description}
            url={selectedNews.url}
            onClose={handleCloseModal}
          />
        )}
        <div
          className="flex flex-col items-start justify-center w-full h-full pt-6 pr-0 pb-6 pl-0 mb-6 md:mb-0 md:w-1/2"
          onClick={() => handleOpenModal(news)}
        >
          <div
            className="flex flex-col items-start justify-center h-full space-y-3 transform md:pr-10 lg:pr-16
            md:space-y-5"
          >
            <div
              className="bg-green-500 flex items-center leading-none rounded-full text-gray-50 pt-1.5 pr-3 pb-1.5 pl-2
              uppercase "
            >
              <p className="inline">
                <svg
                  className="w-3.5 h-3.5 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0
                  00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755
                  1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1
                  0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              </p>
              <p className="inline text-xs font-medium">New</p>
            </div>
            <div className="text-2xl font-bold leading-none lg:text-5xl xl:text-4xl z-10">
              {removeSource(news.title, news.author ?? "")}
            </div>
            <div className="pr-10">{news.description}</div>
            <div className="pt-2 pr-0 pb-0 pl-0">
              <p className="text-sm font-medium inline">Source:</p>
              <div className="inline text-sm font-medium mt-0 mr-1 mb-0 ml-1 underline">
                {news.author ?? "Unknown"}
              </div>
              <p className="inline text-sm font-medium mt-0 mr-1 mb-0 ml-1">
                · {formatDate(news.publishedAt)} ·
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2" onClick={() => handleOpenModal(news)}>
          <div className="block">
            <img
              alt="Featured News Image"
              src={
                news.urlToImage
                  ? news.urlToImage
                  : "https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
              }
              className="object-cover rounded-lg max-h-64 sm:max-h-96 btn- w-full h-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedNews;
