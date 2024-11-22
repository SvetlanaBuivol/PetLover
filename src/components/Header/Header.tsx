import { FC } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import { Button, Svg } from "./Header.styled";
import Navigation from "./Navigation/Navigation";
import AuthNav from "./AuthNav/AuthNav";
import MediaQuery from "react-responsive";
import UserBar from "./UserNav/UserBar/UserBar";
import UserNav from "./UserNav/UserNav";

interface IHeader {
  isHome: boolean;
  isAuth: boolean;
  onOpenModal: () => void;
}

const Header: FC<IHeader> = ({ isHome, onOpenModal, isAuth }) => {
  return (
    <>
      <Link to={"/home"}>
        <Logo isHome={isHome} />
      </Link>
      <MediaQuery minWidth={1280}>
        <Navigation isHome={isHome} />
      </MediaQuery>
      <MediaQuery maxWidth={767}>{isAuth && <UserBar />}</MediaQuery>
      <MediaQuery minWidth={768}>
        {isAuth ? (
          <UserNav isHome={isHome} isHeader={true} />
        ) : (
          <AuthNav isHome={isHome} isHeader={true} />
        )}
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
