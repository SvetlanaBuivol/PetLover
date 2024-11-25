import { FC } from "react";
import { INews } from "../../../models/response/INews";
import {
  Box,
  Card,
  Date,
  ImageBox,
  ReadMoreLink,
  Text,
  Title,
} from "./NewsCard.styled";
import { formatDate } from "../../../helpers/formatDate";

interface NewsCardProps {
  news: INews;
}

const NewsCard: FC<NewsCardProps> = ({ news }) => {
  const formattedDate = formatDate(news?.date);

  return (
    <Card>
      <ImageBox>
        <img src={news.imgUrl} alt="" />
      </ImageBox>
      <div>
        <Title>{news.title}</Title>
        <Text>{news.text}</Text>
        <Box>
          <Date>{formattedDate}</Date>
          <ReadMoreLink
            href={news.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read more
          </ReadMoreLink>
        </Box>
      </div>
    </Card>
  );
};

export default NewsCard;
