import styled from "styled-components";

export const Box = styled.div<{ $isLogin: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 422px;
  width: 100%;
  padding: 27px 20px;
  background-color: var(--white-color);
  border-radius: 30px;
  margin-top: 10px;

  @media screen and (min-width: 768px) {
    min-height: 560px;
    padding: 27px 140px;
    border-radius: 60px;
    margin-top: 16px;
  }

  @media screen and (min-width: 1280px) {
    padding: ${({ $isLogin }) => ($isLogin ? "0 84px" : "0 84px")};
    border-radius: 60px;
    margin-top: 0;
    width: 592px;
    height: 654px;
  }
`;
