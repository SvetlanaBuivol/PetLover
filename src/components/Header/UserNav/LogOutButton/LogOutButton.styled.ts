import styled from "styled-components";

export const Button = styled.button<{ $isHome: boolean; $isHeader: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 12px;
  border-radius: 30px;
  font-family: "Manrope-Bold";
  text-transform: uppercase;
  line-height: 1.2;
  cursor: pointer;
  background-color: ${({ $isHeader }) =>
    $isHeader ? "var(--accent-color)" : "var(--accent-light-color)"};
  color: ${({ $isHeader }) =>
    $isHeader ? "var(--white-color)" : "var(--accent-color)"};
  border: 1px solid transparent;
  transition: background-color 250ms ease-in-out, color 250ms ease-in-out,
    border 250ms ease-in-out;

  &:hover,
  :focus {
    background-color: ${({ $isHeader }) =>
      $isHeader ? "var(--accent-light-color)" : "var(--accent-color)"};
    color: ${({ $isHeader }) =>
      $isHeader ? "var(--accent-color)" : "var(--white-color)"};
    border: 1px solid var(--white-color-50);
  }

  @media screen and (min-width: 768px) {
    padding: 15px;
    width: 136px;
    margin: 0 auto;
    font-size: var(--text-size-s);
  }
`;
