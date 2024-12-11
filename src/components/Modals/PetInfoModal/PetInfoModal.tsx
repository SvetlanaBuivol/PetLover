import { FC, useEffect, useState } from "react";
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
import { useAddToFav } from "../../../hooks/notices/useAddToFav";
import { useCurrentUser } from "../../../hooks/users/useCurrentUser";
import { useRemoveFromFav } from "../../../hooks/notices/useRemoveFromFav";

interface PetInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  petId: string | null;
  onOpenContactModal: (petId: string) => void;
}

const PetInfoModal: FC<PetInfoModalProps> = ({
  isOpen,
  onClose,
  petId,
  onOpenContactModal,
}) => {
  const { notice } = useNoticeById(petId);
  console.log("notice", notice);
  const { addToFav } = useAddToFav(petId);
  const { removeFromFav } = useRemoveFromFav(petId);
  const { user } = useCurrentUser();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (user?.data && petId) {
      const favorite = user.data.noticesFavorites.some(
        (item) => item._id === petId
      );
      setIsFavorite(favorite);
    } else {
      setIsFavorite(false);
    }
  }, [user, petId]);

  const handleAddToFav = () => {
    if (petId) {
      addToFav(petId, {
        onSuccess: () => {
          console.log("Successfully added to favorites");
          setIsFavorite(true);
        },
        onError: (error) => {
          console.error("Failed to add to favorites", error);
          console.error("Failed to add to favorites");
        },
      });
    }
  };

  const handleRemoveFromFav = () => {
    if (petId) {
      removeFromFav(petId, {
        onSuccess: () => {
          console.log("Successfully removed from favorites");
          setIsFavorite(false);
        },
        onError: (error) => {
          console.log("Failed to remove to favorites", error);
        },
      });
    }
  };

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
          <FavButton onClick={handleRemoveFromFav}>
            Remove
            <svg width={18} height={18}>
              <use xlinkHref="svg/svgSprite.svg#icon-fav"></use>
            </svg>
          </FavButton>
        ) : (
          <FavButton onClick={handleAddToFav}>
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
