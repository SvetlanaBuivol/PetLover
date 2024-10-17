import styled from "styled-components";

export const Box = styled.div`
  transform: translate(0, -54px);
  padding: 118px 20px 50px;
  background-color: var(--accent-color);
  border-radius: 30px;
  z-index: 1;

  @media screen and (min-width: 768px) {
    transform: translate(0, -66px);
    padding: 178px 32px 44px;
    border-radius: 60px;
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 178px 64px 32px;
  }
`;

export const Title = styled.h1`
  font-family: "Manrope-Bold";
  font-size: var(--text-size-xl);
  color: var(--white-color);
  line-height: 0.96;
  letter-spacing: -1.5px;
  margin-bottom: 24px;

  span {
    color: var(--white-color-40);
  }

  @media screen and (min-width: 768px) {
    font-size: var(--text-size-xxl2);
    letter-spacing: -2.4px;
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1280px) {
    width: 760px;
    font-size: var(--text-size-xxxl);
    letter-spacing: -2.7px;
    margin-bottom: 0;
  }
`;

export const Text = styled.p`
  color: var(--white-color);

  @media screen and (min-width: 768px) {
    width: 278px;
    margin-left: auto;
    font-size: var(--text-size-m);
    line-height: 1.22;
    letter-spacing: -0.36px;
  }
`;

export const ImageBox = styled.picture`
  transform: translate(0, -54px);
  border-radius: 30px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    transform: translate(0, -66px);
    border-radius: 60px;
  }
`;
