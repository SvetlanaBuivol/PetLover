import styled from "styled-components";
import { LogoBox, Svg } from "../Logo/Logo.styled";

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

  @media screen and (min-width: 768px) {
    background: linear-gradient(
        var(--gradient-img-color),
        var(--gradient-img-color)
      ),
      url("images/main/main-img-tab-1x.jpg");
    background-size: cover;
    background-position: center;

    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      background: linear-gradient(
          var(--gradient-img-color),
          var(--gradient-img-color)
        ),
        url("images/main/main-img-tab-2x.jpg");
      background-size: cover;
      background-position: center;
    }

    @media (-webkit-min-device-pixel-ratio: 3), (min-resolution: 288dpi) {
      background: linear-gradient(
          var(--gradient-img-color),
          var(--gradient-img-color)
        ),
        url("images/main/main-img-tab-3x.jpg");
      background-size: cover;
      background-position: center;
    }
  }

  @media screen and (min-width: 1280px) {
    background: linear-gradient(
        var(--gradient-img-color),
        var(--gradient-img-color)
      ),
      url("images/main/main-img-desk-1x.jpg");
    background-size: cover;
    background-position: center;

    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      background: linear-gradient(
          var(--gradient-img-color),
          var(--gradient-img-color)
        ),
        url("images/main/main-img-desk-2x.jpg");
      background-size: cover;
      background-position: center;
    }

    @media (-webkit-min-device-pixel-ratio: 3), (min-resolution: 288dpi) {
      background: linear-gradient(
          var(--gradient-img-color),
          var(--gradient-img-color)
        ),
        url("images/main/main-img-desk-3x.jpg");
      background-size: cover;
      background-position: center;
    }
  }

  ${LogoBox} {
    color: var(--white-color);
    font-size: var(--text-size-xl);
    opacity: 0;
    transition: opacity 2s ease-in-out;
    animation: fadeIn 2s forwards;

    @media screen and (min-width: 768px) {
      font-size: 100px;
    }

    @keyframes fadeIn {
      to {
        opacity: 1;
      }
    }
  }

  ${Svg} {
    width: 44px;
    height: 44px;
    animation: pulse 1s infinite;
    transition: transform 0.2s ease-in-out;

    @media screen and (min-width: 768px) {
      width: 82px;
      height: 82px;
    }

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
  }
`;
