import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 44px;
    gap: 20px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 60px;
    gap: 28px 20px;
  }
`;
