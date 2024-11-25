import { FC } from "react";
import { INews } from "../../../models/response/INews";
import NewsCard from "../NewsCard/NewsCard";
import { List } from "./NewsList.styled";

interface NewsListProps {
  news: INews[];
}

const NewsList: FC<NewsListProps> = ({ news }) => {
  return (
    <List>
      {news?.map((item) => (
        <NewsCard key={item._id} news={item} />
      ))}
    </List>
  );
};

export default NewsList;
