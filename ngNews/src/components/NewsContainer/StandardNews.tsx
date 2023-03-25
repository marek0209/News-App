import React from "react";
import { News } from "../../types/newsTypes";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import GridNews from "./GridNews";
import ListNews from "./ListNews";

interface Props {
  news: News[];
}

const StandardNews: React.FC<Props> = ({ news }) => {
  const view = useSelector((state: RootState) => state.view.view);

  return view === "grid" ? <GridNews news={news} /> : <ListNews news={news} />;
};

export default StandardNews;
