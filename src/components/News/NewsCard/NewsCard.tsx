import { FC } from "react";
import { INews } from "../../../models/response/INews";

interface NewsCardProps { 
  news: INews;
}

const NewsCard: FC<NewsCardProps> = ({news}) => {
  return (
    <li>
      <div>
        <img src={news.imgUrl} alt="" />
      </div>
      <div>
        <h2>{news.title}</h2>
        <p>{news.text}</p>
        <div>
          <p>{news.date}</p>
          <a href={news.url}>Read more</a>
        </div>
      </div>
    </li>
  );
};

export default NewsCard;
