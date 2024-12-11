import styled from "styled-components";

export const Title = styled.h3`
  font-family: "Manrope-Bold";
  font-size: var(--text-size-s);
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    font-size: var(--text-size-m);
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 10px;
  li {
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      width: 135px;
      padding: 12px;
      border-radius: 30px;
      background-color: var(--accent-color);
      color: var(--white-color);
      font-size: var(--text-size-s);
      cursor: pointer;
      transition: background-color 200ms ease-in-out;

      &:hover {
        background-color: var(--accent-hover-color);
      }

      @media screen and (min-width: 768px) {
        padding: 14px;
        width: 160px;
        height: 48px;
      }
    }
  }
`;
