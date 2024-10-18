import styled from "styled-components";

export const StyledNav = styled.nav`
  display: block;
  margin-top: 176px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  width: 119px;
  margin: 0 auto;
`;

export const Item = styled.li<{ $isActive: boolean; $isHome: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 119px;
  padding: 15px;
  border-radius: 30px;
  cursor: pointer;
  color: ${({ $isHome }) =>
    $isHome ? "var(--primary-text-color)" : "var(--white-color)"};
  border: ${({ $isActive, $isHome }) =>
    $isActive
      ? "1px solid var(--white-color)"
      : $isHome
      ? "1px solid var(--primary-text-color-15)"
      : "1px solid var( --white-color-15)"};
  transition: border 250ms ease-in-out;
  &:hover,
  :focus {
    border: 1px solid
      ${({ $isHome }) =>
        $isHome ? "var(--accent-color)" : "var(--white-color)"};
  }
`;
