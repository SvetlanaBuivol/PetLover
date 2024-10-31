import { FC } from "react";
import { Button } from "./VisiblePasswordIcon.styled";

interface IVisiblePasswordIcon {
  visiblePassword: boolean;
  onClick: () => void;
}

const VisiblePasswordIcon: FC<IVisiblePasswordIcon> = ({
  visiblePassword,
  onClick,
}) => {
  return (
    <Button type="button" onClick={onClick}>
      {visiblePassword ? (
        <svg>
          <use xlinkHref="svg/svgSprite.svg#icon-eye"></use>
        </svg>
      ) : (
        <svg>
          <use xlinkHref="svg/svgSprite.svg#icon-eye-off"></use>
        </svg>
      )}
    </Button>
  );
};

export default VisiblePasswordIcon;
