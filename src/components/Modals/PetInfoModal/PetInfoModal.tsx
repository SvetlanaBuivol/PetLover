import { FC } from "react";
import CommonModal from "../CommonModal/CommonModal";
import { useNoticeById } from "../../../hooks/notices/useNoticeById";
import {
  ButtonsBox,
  Category,
  ContactButton,
  DataList,
  FavButton,
  ImageBox,
  Title,
  Wrapper,
} from "./PetInfoModal.styled";
import StarRating from "../../StarRating/StarRating";
import { formatBirthday } from "../../../helpers/formatBirthday";

interface PetInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  petId: string | null;
  onOpenContactModal: (petId: string) => void;
  isFavorite: boolean;
  removeFromFav: () => void;
  addToFav: () => void;
}

const PetInfoModal: FC<PetInfoModalProps> = ({
  isOpen,
  onClose,
  petId,
  onOpenContactModal,
  isFavorite,
  removeFromFav,
  addToFav,
}) => {
  const { notice } = useNoticeById(petId);

  return (
    <CommonModal isOpen={isOpen} onClose={onClose}>
      <Wrapper>
        <ImageBox>
          <img src={notice?.imgURL} alt={notice?.name} />
          <Category>{notice?.category}</Category>
        </ImageBox>
      </Wrapper>
      <Title>{notice?.title}</Title>
      <StarRating popularity={notice?.popularity || 0} />
      <DataList>
        <li>
          <span>Name</span> {notice?.name}
        </li>
        <li>
          <span>Birthday</span>{" "}
          {notice?.birthday ? formatBirthday(notice.birthday) : "unknown"}
        </li>
        <li>
          <span>Sex</span> {notice?.sex}
        </li>
        <li>
          <span>Species</span> {notice?.species}
        </li>
      </DataList>
      <p>{notice?.comment}</p>
      <ButtonsBox>
        {isFavorite ? (
          <FavButton onClick={() => removeFromFav()}>
            Remove
            <svg width={18} height={18}>
              <use xlinkHref="svg/svgSprite.svg#icon-fav"></use>
            </svg>
          </FavButton>
        ) : (
          <FavButton onClick={() => addToFav()}>
            Add to
            <svg width={18} height={18}>
              <use xlinkHref="svg/svgSprite.svg#icon-fav"></use>
            </svg>
          </FavButton>
        )}

        <ContactButton
          onClick={() => notice?._id && onOpenContactModal(notice?._id)}
        >
          Contact
        </ContactButton>
      </ButtonsBox>
    </CommonModal>
  );
};

export default PetInfoModal;
