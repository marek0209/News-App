import React from "react";
import { News } from "../../types/newsTypes";
import { removeSource } from "../../Utils/sourceRemove";
import { formatDate } from "../../Utils/dateFormatter";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

interface Props {
  news: News[];
}
const StandardNews: React.FC<Props> = ({ news }) => {
  const view = useSelector((state: RootState) => state.view.view);
  console.log(news);
  if (view === "grid")
    return (
      <>
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
              <a
                href={n.url}
                className="text-lg font-bold sm:text-xl md:text-2xl"
              >
                {removeSource(n.title, n.author ?? "")}
              </a>
              <div className="pt-2 pr-0 pb-0 pl-0">
                <a className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline">
                  {n.author}
                </a>
                <p className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-1">
                  · {formatDate(n.publishedAt)} ·
                </p>
                <p className="inline text-xs font-medium text-gray-300 mt-0 mr-1 mb-0 ml-1">
                  1hr 20min. read
                </p>
              </div>
            </div>
          </div>
        ))}
      </>
    );

  return (
    <>
      {news.map((n: News) => (
        <div key={n.url} className="dark:bg-gray-800 dark:text-gray-100">
          <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
            <div className="flex items-center justify-between">
              <span className="text-sm dark:text-gray-400">
                {formatDate(n.publishedAt)}
              </span>
              <p
                className="bg-green-500 flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3
            rounded-full uppercase "
              >
                News
              </p>
            </div>
            <div className="mt-3">
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-2xl font-bold hover:underline"
              >
                {removeSource(n.title, n.author ?? "")}
              </a>
              <p className="mt-2">{n.content}</p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div>
                <span className="hover:underline dark:text-gray-400">
                  {n.author}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
      ;
    </>
  );
};

export default StandardNews;
