import { FC } from "react";
import { IPetInfo } from "../../../models/response/IPetInfo";
import {
  Card,
  DataItem,
  DataList,
  FavBox,
  FavoriteButton,
  ImageBox,
  LearnMoreButton,
  Name,
  PopularityBox,
  Text,
  TitleBox,
} from "./NoticeCard.styled";
import { formatBirthday } from "../../../helpers/formatBirthday";

interface NoticeCardProps {
  notice: IPetInfo;
}

const NoticeCard: FC<NoticeCardProps> = ({ notice }) => {
  return (
    <Card>
      <ImageBox>
        <img src={notice.imgURL} alt={notice.name} />
      </ImageBox>
      <div>
        <TitleBox>
          <h3>{notice.title}</h3>
          <PopularityBox>
            <svg>
              <use xlinkHref="svg/svgSprite.svg#icon-star"></use>
            </svg>
            <p>{notice.popularity}</p>
          </PopularityBox>
        </TitleBox>
        <DataList>
          <Name>
            <span>Name</span> {notice.name}
          </Name>
          <DataItem>
            <span>Birthday</span>{" "}
            {notice.birthday ? formatBirthday(notice.birthday) : "unknown"}
          </DataItem>
          <DataItem>
            <span>Sex</span> {notice.sex}
          </DataItem>
          <DataItem>
            <span>Species</span> {notice.species}
          </DataItem>
          <DataItem>
            <span>Category</span> {notice.category}
          </DataItem>
        </DataList>
        <Text>{notice.comment}</Text>
      </div>
      <FavBox>
        <LearnMoreButton type="button">Learn more</LearnMoreButton>
        <FavoriteButton>
          <svg width={18} height={18}>
            <use xlinkHref="svg/svgSprite.svg#icon-fav"></use>
          </svg>
        </FavoriteButton>
      </FavBox>
    </Card>
  );
};

export default NoticeCard;
