import styled from "styled-components";

export const Box = styled.div<{ $isAuthPage: boolean, $padding: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  margin: 0 auto;
  width: 375px;
  ${({ $isAuthPage }) =>
    $isAuthPage &&
    `
    margin-top: 20px;
    `}

  @media screen and (max-width: 375px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
    ${({ $isAuthPage }) =>
      $isAuthPage &&
      `
    margin-top: 32px;
    `}
  }

  @media screen and (min-width: 1280px) {
    padding: ${({$padding})=> $padding};
    ${({ $isAuthPage }) =>
      $isAuthPage &&
      `
    flex-direction: row;
    gap: 32px;
    margin-top: 32px;
    `}
    /* flex-direction: row; */
    width: 1280px;
  }
`;
