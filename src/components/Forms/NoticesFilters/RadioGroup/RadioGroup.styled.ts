import styled from "styled-components";

export const StyledLabel = styled.label<{$isChecked: boolean}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  padding: 12px;
  color: ${({$isChecked}) => $isChecked ? 'var(--white-color)': 'inherit'};
  background-color: ${({$isChecked}) => $isChecked ? 'var(--accent-color)': 'var(--white-color)'} ;
  border-radius: 30px;

  svg {
    stroke: var(--white-color);
    width: 18px;
    height: 18px;
    margin-left: 6px;
  }

  @media screen and (min-width: 768px) {
    font-size: var(--text-size-s);
    padding: 14px;

    svg {
        margin-left: 8px;
    }
  }
`;

export const StyledInput = styled.input.attrs({ type: "radio" })`
  display: none;
`;
