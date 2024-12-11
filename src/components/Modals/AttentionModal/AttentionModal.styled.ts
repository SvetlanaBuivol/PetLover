import styled from "styled-components";
import {
  List,
  Login,
  Register,
  StyledNav,
} from "../../Header/AuthNav/AuthNav.styled";

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  margin-bottom: 20px;
  border-radius: 50%;
  overflow: hidden;
  background-color: var(--accent-light-color);
  img {
    width: 44px;
    height: 44px;
  }
`;

export const Title = styled.h2`
  font-family: "Manrope-Bold";
  font-size: var(--text-size-l);
  color: var(--accent-color);
  line-height: 1;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1.16;
  }
`;

export const Text = styled.p`
  text-align: center;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 28px;
    width: 346px;
  }
`;

export const Box = styled.div`
  ${StyledNav} {
    width: 272px;
  }
  ${List} {
    flex-direction: row;
    text-transform: none;
  }

  @media screen and (min-width: 768px) {
    ${StyledNav} {
      width: 288px;
    }
    ${Login} {
      width: 140px;
    }
    ${Register} {
      width: 140px;
    }
  }
`;
