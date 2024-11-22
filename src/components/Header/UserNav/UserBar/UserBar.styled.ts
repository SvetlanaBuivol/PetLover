import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 12px;
  gap: 8px;

  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 50px;
    height: 50px;
    img {
      width: 50px;
      height: 50px;
    }
  }
`;

export const UserName = styled.p<{ $isHome: boolean }>`
  display: none;
  font-family: "Manrope-Bold";
  font-size: var(--text-size-l);
  line-height: 1;
  color: ${({ $isHome }) => ($isHome ? "var(--white-color)" : "inherit")};

  @media screen and (min-width: 768px) {
    display: block;
    max-width: 85px;
    overflow: hidden;
  }
`;
