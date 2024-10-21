import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const Modal = styled.div<{ $isHome: boolean }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 0;
  right: 0;
  width: 218px;
  height: 100%;
  max-height: 812px;
  padding: 28px 20px 40px;
  margin-left: auto;
  background-color: ${({ $isHome }) =>
    $isHome ? "var(--white-color)" : "var(--accent-color)"};
  overflow-y: auto;

  @media screen and (min-width: 768px) {
    width: 374px;
    padding: 40px 49px;
  }
`;

export const Button = styled.button`
  display: block;
  margin-left: auto;
  width: 32px;
  height: 32px;

  @media screen and (min-width: 768px) {
    width: 36px;
    height: 36px;
  }
`;

export const Svg = styled.svg<{ $isHome: boolean }>`
  width: 32px;
  height: 32px;
  stroke: ${({ $isHome }) =>
    $isHome ? "var(--primary-text-color)" : "var(--white-color)"};

  @media screen and (min-width: 768px) {
    width: 36px;
    height: 36px;
  }
`;
