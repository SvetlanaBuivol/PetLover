import { FC } from "react";
import { INews } from "../../../models/response/INews";
import NewsCard from "../NewsCard/NewsCard";

interface NewsListProps {
  news: INews[];
}

const NewsList: FC<NewsListProps> = ({ news }) => {
  return (
    <ul>
      {news?.map((item) => (
        <NewsCard key={item._id} news={item} />
      ))}
    </ul>
  );
};

export default NewsList;
