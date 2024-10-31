import { FC } from "react";
import Logo from "../Logo/Logo";
import { Button, Svg } from "./Header.styled";
import { Link } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import AuthNav from "./AuthNav/AuthNav";
import MediaQuery from "react-responsive";

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
      <MediaQuery minWidth={1280}>
        <Navigation isHome={isHome} />
      </MediaQuery>
      <MediaQuery minWidth={768}>
        <AuthNav isHome={isHome} isHeader={true} />
      </MediaQuery>
      <Button onClick={onOpenModal}>
        <Svg $isHome={isHome}>
          <use xlinkHref="svg/svgSprite.svg#icon-menu"></use>
        </Svg>
      </Button>
    </>
  );
};

export default Header;
