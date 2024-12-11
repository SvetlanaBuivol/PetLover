import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;

export const ImageBox = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
    margin-bottom: 16px;
  }
`;

export const Category = styled.div`
  position: absolute;
  top: 0;
  left: -2px;
  display: flex;
  align-items: center;
  padding: 8px 14px;
  border-radius: 30px;
  background-color: var(--accent-light-color);
  color: var(--accent-color);
  font-size: var(--text-size-xxs);

  @media screen and (min-width: 768px) {
    left: 4px;
    font-size: var(--text-size-xs);
  }
`;

export const Title = styled.h3`
  font-family: "Manrope-Bold";
  font-size: var(--text-size-s);
  letter-spacing: 0;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    font-size: var(--text-size-m);
  }
`;

export const DataList = styled.ul`
  display: flex;
  gap: 27px;
  margin-bottom: 18px;
  li {
    font-size: var(--text-size-xxs);
    span {
      display: block;
      margin-bottom: 4px;
      font-size: 10px;
      color: var(--primary-text-color-50);
    }
  }
`;

export const ButtonsBox = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 40px;
`;

export const FavButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 135px;
  padding: 12px;
  border-radius: 30px;
  background-color: var(--accent-color);
  color: var(--white-color);
  font-size: var(--text-size-s);
  transition: background-color 200ms ease-in-out;
  svg {
    stroke: var(--white-color);
    fill: none;
  }
  &:hover {
    background-color: var(--accent-hover-color);
  }

  @media screen and (min-width: 768px) {
    padding: 14px;
    width: 160px;
    height: 48px;
  }
`;

export const ContactButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 135px;
  padding: 12px;
  border-radius: 30px;
  background-color: var(--accent-light-color);
  color: var(--accent-color);
  font-size: var(--text-size-s);
  transition: background-color 200ms ease-in-out;
  &:hover {
    background-color: var(--accent-light-hover-color);
  }

  @media screen and (min-width: 768px) {
    padding: 14px;
    width: 160px;
    height: 48px;
  }
`;
