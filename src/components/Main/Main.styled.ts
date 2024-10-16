import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url("src/assets/images/main/main-img-mb-1x.jpg");
  background-size: cover;
  background-position: center;

  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    background-image: url("src/assets/images/main/main-img-mb-2x.jpg");
  }

  @media (-webkit-min-device-pixel-ratio: 3), (min-resolution: 288dpi) {
    background-image: url("src/assets/images/main/main-img-mb-3x.jpg");
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: flex-end;
  color: var(--white-color);
  font-size: var(--text-size-xl);
  font-family: "Manrope-Bold";
  line-height: 1;
  letter-spacing: -2px;
  opacity: 0;
  transition: opacity 1.5s ease-in-out;
  animation: fadeIn 1.5s forwards;
  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`;

export const Svg = styled.svg`
  width: 44px;
  height: 44px;
`;
