import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;
  margin-right: 16px;

  @media screen and (min-width: 1280px) {
    margin-right: 0;
  }
`;
