import styled from "styled-components";
import { Box } from "../Container/Container.styled";

export const Header = styled.header<{ $isHome: boolean }>`
  position: relative;
  padding-top: 28px;
  z-index: 2;

  ${Box} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: ${({ $isHome }) => ($isHome ? "0 40px" : "0")};
  }

  @media screen and (min-width: 768px) {
    ${Box} {
      padding: ${({ $isHome }) => ($isHome ? "0 64px" : "0")};
    }
    padding-top: 39px;
  }

  @media screen and (min-width: 1280px) {
    ${Box} {
      padding: ${({ $isHome }) => ($isHome ? "0 96px" : "0")};
    }
    padding-top: 32px;
  }
`;

export const Svg = styled.svg<{$isHome: boolean}>`
  display: block;
  width: 32px;
  height: 32px;
  fill: var(--accent-color);
  stroke: ${({$isHome})=>($isHome ? 'var(--white-color)' : 'var(--primary-text-color)')};

  @media screen and (min-width: 768px) {
    width: 36px;
    height: 36px;
  }
`;
