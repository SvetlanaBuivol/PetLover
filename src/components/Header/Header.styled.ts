import styled from "styled-components";

export const Button = styled.button`
 width: 32px;
 height: 32px;

 @media screen and (min-width: 768px) {
    width: 36px;
    height: 36px;
  }

  @media screen and (min-width: 1280px) {
    display: none;
  }
`

export const Svg = styled.svg<{$isHome: boolean}>`
  display: block;
  width: 32px;
  height: 32px;
  fill: var(--accent-color);
  stroke: ${({$isHome})=>($isHome ? 'var(--white-color)' : 'var(--primary-text-color)')};

  @media screen and (min-width: 768px) {
    width: 36px;
    height: 36px;
  }
`;