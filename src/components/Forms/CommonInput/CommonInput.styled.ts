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

export const Input = styled.input<{
  $isPasswordSecure: boolean;
  $isError: boolean;
}>`
  width: 100%;
  border-radius: 30px;
  border: 1px solid
    ${({ $isPasswordSecure, $isError }) =>
      $isPasswordSecure
        ? "var(--success-color)"
        : $isError
        ? "var(--error-color)"
        : "var(--primary-text-color-15)"};
  padding: 12px;

  &::placeholder {
    color: var(--secondary-text-color);
  }

  @media screen and (min-width: 768px) {
    padding: 15px;
  }
`;

export const CheckedSvg = styled.svg`
  position: absolute;
  right: 38px;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;

  @media screen and (min-width: 768px) {
    width: 22px;
    height: 22px;
    right: 50px;
  }
`;

export const ErrorSvg = styled.svg`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;

  @media screen and (min-width: 768px) {
    width: 22px;
    height: 22px;
    right: 16px;
  }
`;

const BaseMessage = styled.span`
  font-size: 10px;
  line-height: 1.2;
  margin-left: 12px;
  margin-top: 2px;

  @media screen and (min-width: 768px) {
    font-size: var(--text-size-xxs);
    margin-left: 16px;
    margin-top: 4px;
  }
`;

export const ErrorMessage = styled(BaseMessage)`
  color: var(--error-color);
`;

export const SecureMessage = styled(BaseMessage)`
  color: var(--success-color);
`;
