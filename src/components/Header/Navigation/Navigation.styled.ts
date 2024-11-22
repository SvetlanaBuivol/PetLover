import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface IStyledProps {
  $isHome: boolean;
}

export const StyledNav = styled.nav<IStyledProps>`
  display: block;

  @media screen and (min-width: 1280px) {
    position: relative;
    left: ${({ $isHome }) => ($isHome ? "280px" : "313px")};
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  width: 119px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    font-size: var(--text-size-s);
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    width: fit-content;
  }
`;

export const Item = styled.li``;

export const StyledLink = styled(NavLink)<IStyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 119px;
  padding: 15px;
  border-radius: 30px;
  cursor: pointer;
  color: ${({ $isHome }) =>
    $isHome ? "var(--primary-text-color)" : "var(--white-color)"};
  border: 1px solid
    ${({ $isHome }) =>
      $isHome ? "var(--primary-text-color-15)" : "var(--white-color-40)"};
  transition: border 250ms ease-in-out;
  &:hover,
  :focus {
    border: 1px solid
      ${({ $isHome }) =>
        $isHome ? "var(--accent-color)" : "var(--white-color)"};
  }

  @media screen and (min-width: 1280px) {
    color: ${({ $isHome }) =>
      $isHome ? "var(--white-color)" : "var(--primary-text-color)"};
    border: 1px solid
      ${({ $isHome }) =>
        $isHome ? "var(--white-color-40)" : "var(--primary-text-color-15)"};

    width: fit-content;

    &.active {
      border: 1px solid var(--accent-color);
    }

    &:hover,
    :focus {
      border: 1px solid
        ${({ $isHome }) =>
          $isHome ? "var(--white-color)" : "var(--accent-color)"};
    }
  }
`;
