import styled from "styled-components";

export const StyledTitle = styled.h2`
  font-family: "Manrope-Bold";
  font-size: var(--text-size-l2);
  letter-spacing: -0.84px;
  line-height: 1;

  @media screen and (min-width: 768px) {
    font-size: var(--text-size-xxl);
  }
`;

export const Subtitle = styled.p`
  margin-top: 12px;

  @media screen and (min-width: 768px) {
    font-size: var(--text-size-m);
    margin-top: 16px;
  }
`;
