import { FC } from "react";
import { Link } from "react-router-dom";
import { List, Login, Register, StyledNav } from "./AuthNav.styled";

interface IAuthNav {
  isHome: boolean;
  onClose?: () => void;
  isHeader?: boolean;
}

const AuthNav: FC<IAuthNav> = ({ isHome, isHeader = false, onClose }) => {
  return (
    <StyledNav $isHeader={isHeader}>
      <List>
        <Login $isHome={isHome} onClick={onClose} $isHeader={isHeader}>
          <Link to={"/login"}>Log In</Link>
        </Login>
        <Register $isHome={isHome} $isHeader={isHeader} onClick={onClose}>
          <Link to={"/register"}>Registration</Link>
        </Register>
      </List>
    </StyledNav>
  );
};

export default AuthNav;
