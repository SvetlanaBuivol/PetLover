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
}

const PetInfoModal: FC<PetInfoModalProps> = ({ isOpen, onClose, petId }) => {
  const { notice } = useNoticeById(petId);
  if (notice) {
    console.log("notice", notice);
  }

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
        <FavButton>
          Add to
          <svg width={18} height={18}>
            <use xlinkHref="svg/svgSprite.svg#icon-fav"></use>
          </svg>
        </FavButton>
        <ContactButton>Contact</ContactButton>
      </ButtonsBox>
    </CommonModal>
  );
};

export default PetInfoModal;
