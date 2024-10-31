import styled from "styled-components";

export const Form = styled.form`
  margin-top: 24px;

  @media screen and (min-width: 768px) {
    margin-top: 32px;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  text-transform: uppercase;
  font-family: "Manrope-Bold";
  border-radius: 30px;
  background-color: var(--accent-color);
  color: var(--white-color);
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    margin-top: 64px;
    padding: 16px;
    font-size: var(--text-size-s);
  }
`;
