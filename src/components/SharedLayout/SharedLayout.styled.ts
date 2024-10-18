import styled from "styled-components";
import { Box } from "../Container/Container.styled";

export const StyledHeader = styled.header<{ $isHome: boolean }>`
  position: relative;
  padding-top: 28px;
  z-index: 2;

  ${Box} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: ${({ $isHome }) => ($isHome ? "0 40px" : "0 20px")};
  }

  @media screen and (min-width: 768px) {
    ${Box} {
      padding: ${({ $isHome }) => ($isHome ? "0 64px" : "0 32px")};
    }
    padding-top: 39px;
  }

  @media screen and (min-width: 1280px) {
    ${Box} {
      padding: ${({ $isHome }) => ($isHome ? "0 96px" : "0 64px")};
    }
    padding-top: 32px;
  }
`;


