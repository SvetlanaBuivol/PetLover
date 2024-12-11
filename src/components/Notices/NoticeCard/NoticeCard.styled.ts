import styled from "styled-components";

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  padding: 24px;
  background-color: var(--white-color);
  border-radius: 16px;

  @media screen and (min-width: 768px) {
    gap: 0;
    width: 342px;
    height: 444px;
  }

  @media screen and (min-width: 1280px) {
    width: 362px;
  }
`;

export const ImageBox = styled.div`
  width: 100%;
  border-radius: 16px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    height: 178px;
    margin-bottom: 24px;
  }
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;

  h3 {
    font-family: "Manrope-Bold";
    font-size: var(--text-size-s);
    letter-spacing: 0;
  }

  @media screen and (min-width: 768px) {
    h3 {
      font-size: var(--text-size-m);
    }
  }
`;

export const PopularityBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  svg {
    width: 16px;
    height: 16px;
    fill: var(--accent-color);
  }
`;

export const DataList = styled.ul`
  display: flex;
  gap: 14px;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }

  @media screen and (min-width: 1280px) {
    gap: 20px;
  }
`;

export const DataItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-size: var(--text-size-xxs);

  span {
    font-size: 10px;
    color: var(--primary-text-color-50);
  }
`;

export const Name = styled(DataItem)`
  max-width: 45px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  @media screen and (min-width: 1280px) {
    max-width: 50px;
  }
`;

export const Text = styled.p`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const FavBox = styled.div`
  display: flex;
  gap: 10px;

  @media screen and (min-width: 768px) {
    height: 48px;
    margin-top: auto;
  }
`;

export const LearnMoreButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 231px;
  padding: 14px;
  border-radius: 30px;
  background-color: var(--accent-color);
  color: var(--white-color);
  transition: background-color 200ms ease-in-out;

  &:hover {
    background-color: var(--accent-hover-color);
  }

  @media screen and (min-width: 768px) {
    width: 236px;
    height: 48px;
    font-size: var(--text-size-s);
  }

  @media screen and (min-width: 1280px) {
    width: 257px;
  }
`;

export const FavoriteButton = styled.button<{ $isFavorite?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 46px;
  height: 46px;
  background-color: var(--accent-light-color);
  border-radius: 50%;
  transition: background-color 200ms ease-in-out;
  svg {
    stroke: var(--accent-color);
    fill: ${({ $isFavorite }) =>
      $isFavorite ? "var(--accent-color)" : "none"};
  }

  &:hover {
    background-color: var(--accent-light-hover-color);
  }

  @media screen and (min-width: 768px) {
    width: 48px;
    height: 48px;
  }
`;
