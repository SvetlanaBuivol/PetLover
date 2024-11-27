import styled from "styled-components";

export const Card = styled.li`
  position: relative;
  display: flex;
  width: 100%;
  padding: 40px 20px;
  border-radius: 15px;
  background-color: var(--white-color);

  @media screen and (min-width: 768px) {
    width: 342px;
  }
`;

export const Time = styled.p`
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 8px;
  color: var(--accent-color);
  border-radius: 30px;
  background-color: var(--accent-light-color);
  font-size: var(--text-size-xxs);

  @media screen and (min-width: 768px) {
    font-size: var(--text-size-xs);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 14px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`;

export const ImageBox = styled.div`
  width: 80px;
  height: 80px;

  @media screen and (min-width: 768px) {
    width: 90px;
    height: 90px;
  }
`;

export const Title = styled.h3`
  font-family: "Manrope-Bold";
  font-size: var(--text-size-s);
  letter-spacing: -0.64px;
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    font-size: var(--text-size-l);
    margin-bottom: 20px;
  }
`;

export const Address = styled.address`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Link = styled.a`
  width: 196px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  word-break: break-all;
  color: inherit;
  cursor: pointer;
  transition: color 200ms ease-in-out;
  &:hover {
    color: var(--accent-color);
  }
  span {
    color: var(--primary-text-color-50);
  }
`;

export const Text = styled.p`
  width: 196px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  word-break: break-all;
  span {
    color: var(--primary-text-color-50);
  }
`;
