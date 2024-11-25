import styled from "styled-components";

export const Wrapper = styled.div<{ $isNewsPage: boolean }>`
  position: relative;
  width: 100%;
  margin-top: ${({ $isNewsPage }) => ($isNewsPage ? "20px" : "0")};
  margin-bottom: ${({ $isNewsPage }) => ($isNewsPage ? "24px" : "0")};
  input {
    width: 100%;
    padding: 12px;
    border-radius: 30px;
    border: 1px solid var(--primary-text-color-15);

    &::placeholder {
      color: var(--primary-text-color-50);
      font-size: inherit;
    }
  }

  @media screen and (min-width: 768px) {
    position: absolute;
    width: 230px;
    margin: 0;
    top: 0;
    right: 32px;
    margin-left: auto;
    input {
      padding: 14px;
      &::placeholder {
        font-size: var(--text-size-s);
      }
    }
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  right: 12px;
  top: 16px;
  width: 18px;
  height: 18px;
  svg {
    width: 18px;
    height: 18px;
    fill: none;
    stroke: inherit;
  }

  @media screen and (min-width: 768px) {
    right: 14px;
    top: 18px;
  }
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 16px;
  right: 34px;
  width: 18px;
  height: 18px;
  svg {
    width: 18px;
    height: 18px;
    fill: none;
    stroke: inherit;
  }

  @media screen and (min-width: 768px) {
    right: 36px;
    top: 18px;
  }
`;
