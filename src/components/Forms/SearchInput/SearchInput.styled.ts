import styled from "styled-components";

export const Wrapper = styled.div<{
  $isNewsPage: boolean;
  $isFiltersForm: boolean;
}>`
  position: relative;
  width: 100%;

  margin-top: ${({ $isNewsPage }) => ($isNewsPage ? "20px" : "0")};
  margin-bottom: ${({ $isNewsPage }) => ($isNewsPage ? "24px" : "0")};
  input {
    width: 100%;
    height: 42px;
    padding: 12px;
    border-radius: 30px;
    border: ${({ $isFiltersForm }) =>
      $isFiltersForm ? "none" : "1px solid var(--primary-text-color-15)"};
    background-color: var(--white-color);

    &::placeholder {
      color: var(--primary-text-color-50);
      font-size: inherit;
      color: ${({ $isFiltersForm }) =>
        $isFiltersForm ? "inherit" : "var(--primary-text-color-50)"};
    }
  }

  @media screen and (min-width: 768px) {
    ${({ $isFiltersForm }) =>
      $isFiltersForm
        ? `
    width: 265px;
    `
        : `
    position: absolute;
    width: 230px;
    margin: 0;
    top: 0;
    right: 32px;
    margin-left: auto;
    `}

    input {
      height: 48px;
      padding: 14px;
      font-size: var(--text-size-s);
      &::placeholder {
        font-size: var(--text-size-s);
      }
    }
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  right: 12px;
  top: 12px;
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
    top: 14px;
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
