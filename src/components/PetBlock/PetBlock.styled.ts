import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;

  @media screen and (min-width: 1280px) {
    width: 592px;
  }
`;

export const PetBox = styled.div`
  position: absolute;
  bottom: 32px;
  left: 32px;
  display: flex;
  background-color: var(--white-color);
  border-radius: 20px;
  padding: 16px;
  width: 294px;
  gap: 8px;

  @media screen and (min-width: 1280px) {
    bottom: 97px;
    left: 61px;
  }
`;

export const Image = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 8px;

  p {
    font-size: var(--text-size-xxs);
    letter-spacing: -0.24px;
    color: var(--secondary-text-color);

    span {
      color: var(--primary-text-color);
    }
  }
`;

export const Name = styled.h3`
  font-family: "Manrope-Bold";
  color: var(--accent-color);
  font-size: var(--text-size-s);
`;

export const Description = styled.p`
  font-size: var(--text-size-xxs);
  color: var(--primary-text-color-80);
  width: 194px;
  max-height: 62px;
  letter-spacing: -0.5px;
  overflow: hidden;
`;
