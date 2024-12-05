import { FC } from "react";
import { Box, StarIcon, StarWrapper } from "./StarRating.styled";

interface StarRatingProps {
  popularity: number;
}

const StarRating: FC<StarRatingProps> = ({ popularity }) => {
  const stars = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <Box>
      <StarWrapper>
        {stars.map((star) => (
          <StarIcon key={star} $isActive={popularity >= star}>
            <use xlinkHref="svg/svgSprite.svg#icon-star" />
          </StarIcon>
        ))}
      </StarWrapper>
      <p>{popularity}</p>
    </Box>
  );
};

export default StarRating;
