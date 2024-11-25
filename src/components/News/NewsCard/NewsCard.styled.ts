import styled from "styled-components";

export const Card = styled.li`
  max-width: 335px;
  width: 335px;

  @media screen and (min-width: 768px) {
    width: 340px;
    max-width: 340px;
    height: 476px;
  }

  @media screen and (min-width: 1280px) {
    width: 361px;
    max-width: 361px;
  }
`;

export const ImageBox = styled.div`
  width: 100%;
  height: 190px;
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    height: 226px;
    margin-bottom: 28px;
  }
`;

export const Title = styled.h3`
  font-family: "Manrope-Bold";
  font-size: var(--text-size-s);
  margin-bottom: 12px;

   @media screen and (min-width: 768px) {
    font-size: var(--text-size-l);
    line-height: 1.3;
    margin-bottom: 14px;
    height: 52px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

export const Text = styled.p`
  max-height: 80px;
  width: 335px;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 19px;

   @media screen and (min-width: 768px) {
    font-size: var(--text-size-s);
    margin-bottom: 28px;
    height: 80px;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Date = styled.p`
  color: var(--primary-text-color-50);

  @media screen and (min-width: 768px) {
    font-size: var(--text-size-s);
  }
`;

export const ReadMoreLink = styled.a`
  color: var(--accent-color);
  text-decoration: underline;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    font-size: var(--text-size-s);
  }
`;
