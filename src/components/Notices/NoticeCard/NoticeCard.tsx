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
import { useAddToFav } from "../../../hooks/notices/useAddToFav";
import { useRemoveFromFav } from "../../../hooks/notices/useRemoveFromFav";

interface NoticeCardProps {
  notice: IPetInfo<string>;
  openPetInfoModal: (id: string) => void;
  openAttentionModal: () => void;
  isFavorite: boolean;
}

const NoticeCard: FC<NoticeCardProps> = ({
  notice,
  openPetInfoModal,
  openAttentionModal,
  isFavorite,
}) => {
  const isAuth = localStorage.getItem("token");
  
  const { addToFav } = useAddToFav(notice._id);
  const { removeFromFav } = useRemoveFromFav(notice._id);

  const handleToggleFavorite = () => {
    console.log("pressed FAV");
    if (isFavorite) {
      removeFromFav(notice._id);
    } else {
      addToFav(notice._id);
    }
  };

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
        <LearnMoreButton
          type="button"
          onClick={
            isAuth
              ? () => openPetInfoModal(notice._id)
              : () => openAttentionModal()
          }
        >
          Learn more
        </LearnMoreButton>
        <FavoriteButton
          onClick={
            isAuth ? () => handleToggleFavorite() : () => openAttentionModal()
          }
          $isFavorite={isFavorite}
        >
          <svg width={18} height={18}>
            <use xlinkHref="svg/svgSprite.svg#icon-fav"></use>
          </svg>
        </FavoriteButton>
      </FavBox>
    </Card>
  );
};

export default NoticeCard;
