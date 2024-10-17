import styled from "styled-components";

export const LogoBox = styled.div<{ $isHome: boolean, $isMain: boolean }>`
  display: flex;
  align-items: flex-end;
  color: ${({ $isHome }) => ($isHome ? 'var(--white-color)' : 'var(--primary-text-color)')};
  font-size: 20px;
  font-family: "Manrope-Bold";
  line-height: 1;
  letter-spacing: ${({ $isMain }) => ($isMain ? '-2px' : '-0.8px')};

  @media screen and (min-width: 768px) {
    font-size: var(--text-size-l2);
  }
`;

export const Svg = styled.svg<{ $isHome: boolean }>`
  width: 17px;
  height: 17px;
  fill: ${({$isHome}) => ($isHome ? 'var(--white-color)' : 'var(--accent-color)')};

  @media screen and (min-width: 768px) {
    width: 23px;
    height: 23px;
  }
`;
