import styled from "styled-components";

export const Button = styled.button`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;

  svg {
    transform: scale(1.09);
    width: 18px;
    height: 18px;
  }

  @media screen and (min-width: 768px) {
    right: 15px;
    width: 22px;
    height: 22px;

    svg {
      width: 22px;
      height: 22px;
    }
  }
`;
