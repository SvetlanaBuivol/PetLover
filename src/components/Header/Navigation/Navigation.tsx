import { FC } from "react";
import navListData from "../../../data/navList.json";
import { Item, List, StyledLink, StyledNav } from "./Navigation.styled";

interface INavList {
  name: string;
  href: string;
}

interface INavigation {
  onClose?: () => void;
  isHome: boolean;
}

const navList: INavList[] = navListData;

const Navigation: FC<INavigation> = ({ onClose, isHome }) => {
  return (
    <StyledNav>
      <List>
        {navList.map((item) => (
          <Item key={item.href} onClick={onClose}>
            <StyledLink to={item.href} $isHome={isHome}>
              {item.name}
            </StyledLink>
          </Item>
        ))}
      </List>
    </StyledNav>
  );
};

export default Navigation;
