import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  margin: 0 auto;
  width: 375px;

  @media screen and (max-width: 375px) {
    width: 100%;
  }
`;
