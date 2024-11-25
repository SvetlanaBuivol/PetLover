import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  gap: 24px;

  @media screen and (min-width: 768px) {
    margin-top: 44px;
    width: 704px;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px 24px;
  }

  @media screen and (min-width: 1280px) {
    width: 1153px;
    gap: 40px 35px;
  }
`;
