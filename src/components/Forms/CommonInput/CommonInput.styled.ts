import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;

  &:not(:first-child) {
    margin-top: 10px;
  }

  @media screen and (min-width: 768px) {
    &:not(:first-child) {
      margin-top: 16px;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 30px;
  border: 1px solid var(--primary-text-color-15);
  padding: 12px;

  &::placeholder {
    color: var(--secondary-text-color);
  }

  @media screen and (min-width: 768px) {
    padding: 15px;
  }
`;
