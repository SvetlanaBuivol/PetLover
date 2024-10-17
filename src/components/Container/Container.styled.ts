import styled from "styled-components";

export const Box = styled.div`
  /* position: relative; */
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  margin: 0 auto;
  width: 375px;

  @media screen and (max-width: 375px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    /* flex-direction: row; */
    width: 1280px;
  }
`;
