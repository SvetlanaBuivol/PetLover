import styled from "styled-components";

interface IStyledProps {
  $isHome: boolean;
  $isHeader?: boolean;
}

export const StyledNav = styled.nav<{ $isHeader: boolean }>`
  display: block;
  width: 178px;

  @media screen and (min-width: 768px) {
    width: ${({ $isHeader }) => ($isHeader ? "fit-content" : "100%")};
    ${({ $isHeader }) =>
      $isHeader &&
      `
      margin-left: auto;
      margin-right: 16px;
    `}
  }

  @media screen and (min-width: 1280px) {
    width: fit-content;
    margin: 0;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-transform: uppercase;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px;
    border-radius: 30px;
    font-family: "Manrope-Bold";
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    font-size: var(--text-size-s);

    li {
      padding: 15px;
    }
  }
`;

export const Login = styled.li<IStyledProps>`
  width: 100%;
  background-color: var(--accent-color);
  border: ${({ $isHome }) =>
    $isHome
      ? "1px solid var(--accent-color)"
      : "1px solid var(--white-color-50)"};
  color: var(--white-color);
  transition: background-color 250ms ease-in-out, color 250ms ease-in-out,
    border 250ms ease-in-out;

  &:hover,
  :focus {
    background-color: var(--accent-light-color);
    border: 1px solid var(--accent-light-color);
    color: var(--accent-color);
  }

  @media screen and (min-width: 768px) {
    border: ${({ $isHome, $isHeader }) =>
      $isHome
        ? "1px solid var(--white-color-50)"
        : $isHeader
        ? "1px solid var(--accent-color)"
        : "1px solid var(--white-color-50)"};
    width: 119px;
  }

  @media screen and (min-width: 1280px) {
    border: ${({ $isHome }) =>
      $isHome
        ? "1px solid var(--white-color-50)"
        : "1px solid var(--accent-color)"};
  }
`;

export const Register = styled.li<IStyledProps>`
  width: 100%;
  background-color: var(--accent-light-color);
  border: 1px solid var(--accent-light-color);
  color: var(--accent-color);
  transition: background-color 250ms ease-in-out, color 250ms ease-in-out,
    border 250ms ease-in-out;

  &:hover,
  :focus {
    border: ${({ $isHome }) =>
      $isHome
        ? "1px solid var(--accent-color)"
        : "1px solid var(--white-color-50)"};
    background-color: var(--accent-color);
    color: var(--white-color);
  }

  @media screen and (min-width: 768px) {
    &:hover,
    :focus {
      border: ${({ $isHome, $isHeader }) =>
        $isHome
          ? "1px solid var(--white-color-50)"
          : $isHeader
          ? "1px solid var(--accent-color)"
          : "1px solid var(--white-color-50)"};
    }
    width: 149px;
  }
`;
