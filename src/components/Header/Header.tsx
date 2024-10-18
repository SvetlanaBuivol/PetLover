import { FC } from "react";
import Logo from "../Logo/Logo";
import { Button, Svg } from "./Header.styled";

interface IHeader {
  isHome: boolean;
  onOpenModal: () => void;
}

const Header: FC<IHeader> = ({ isHome, onOpenModal }) => {
  return (
    <>
      <Logo isHome={isHome} />
      <Button onClick={onOpenModal}>
        <Svg $isHome={isHome}>
          <use xlinkHref="svg/svgSprite.svg#icon-menu"></use>
        </Svg>
      </Button>
    </>
  );
};

export default Header;
