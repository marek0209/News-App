import React from "react";
import { News } from "../../types/newsTypes";
import { removeSource } from "../../Utils/sourceRemove";
import { formatDate } from "../../Utils/dateFormatter";

interface Props {
  news: News[];
}
const StandardNews: React.FC<Props> = ({ news }) => {
  console.log(news);
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
};

export default StandardNews;
