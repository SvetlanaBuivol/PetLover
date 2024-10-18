import { FC } from "react";
import navListData from "../../../data/navList.json";
import { Link, useLocation } from "react-router-dom";
import { Item, List, StyledNav } from "./Navigation.styled";

interface INavList {
  name: string;
  href: string;
}

interface INavigation {
    onClose: () => void;
    isHome: boolean
}

const navList: INavList[] = navListData;

const Navigation: FC<INavigation> = ({ onClose, isHome }) => {
    const location = useLocation()

  return (
    <StyledNav>
      <List>
        {navList.map((item) => (
            <Item key={item.href} onClick={onClose} $isActive={item.href === location.pathname} $isHome={isHome}>
            <Link to={item.href}>{item.name}</Link>
          </Item>
        ))}
      </List>
    </StyledNav>
  );
};

export default Navigation;
