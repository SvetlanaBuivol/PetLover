import { FC } from "react";
import Logo from "../Logo/Logo";
import { Button, Svg } from "./Header.styled";
import { Link } from "react-router-dom";

interface IHeader {
  isHome: boolean;
  onOpenModal: () => void;
}

const Header: FC<IHeader> = ({ isHome, onOpenModal }) => {
  return (
    <>
      <Link to={"/home"}>
        <Logo isHome={isHome} />
      </Link>
      <Button onClick={onOpenModal}>
        <Svg $isHome={isHome}>
          <use xlinkHref="svg/svgSprite.svg#icon-menu"></use>
        </Svg>
      </Button>
    </>
  );
};

export default Header;
