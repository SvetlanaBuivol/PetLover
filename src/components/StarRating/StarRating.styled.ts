import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  gap: 2px;
  justify-content: center;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const StarWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

export const StarIcon = styled.svg<{ $isActive: boolean }>`
  width: 16px;
  height: 16px;
  fill: ${({ $isActive }) =>
    $isActive ? "var(--accent-color)" : "var(--primary-text-color-5)"};
`;
