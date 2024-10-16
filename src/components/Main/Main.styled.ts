import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url("images/main/main-img-mb-1x.jpg");
  background-size: cover;
  background-position: center;

  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    background-image: url("images/main/main-img-mb-2x.jpg");
  }

  @media (-webkit-min-device-pixel-ratio: 3), (min-resolution: 288dpi) {
    background-image: url("images/main/main-img-mb-3x.jpg");
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
  transition: opacity 2s ease-in-out;
  animation: fadeIn 2s forwards;
  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`;

export const Svg = styled.svg`
  width: 44px;
  height: 44px;

  animation: pulse 1s infinite;
  transition: transform 0.2s ease-in-out;

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.1);
      opacity: 0.7;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;
