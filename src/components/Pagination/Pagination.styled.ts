import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  gap: 11px;
  margin-top: 44px;
`;

export const ArrowsButton = styled.div<{ $isLeft?: boolean }>`
  display: flex;
  gap: 6px;

  button {
    border: 1px solid var(--primary-text-color-20);
    &:disabled {
      border: 1px solid var(--primary-text-color-5);
      svg {
        fill: var(--primary-text-color-50);
      }
    }
    svg {
      width: 20px;
      height: 20px;
      ${({ $isLeft }) =>
        $isLeft &&
        `
        transform: scale(-1, 1);
      `}
    }
  }
`;

export const NumbersButton = styled.div`
  display: flex;
  gap: 10px;
  button {
    border: 1px solid var(--primary-text-color-5);
  }
`;

export const Button = styled.button<{
  $isDouble?: boolean;
  $isActive?: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-family: "Manrope-Bold";
  letter-spacing: 0;

  ${({ $isDouble }) =>
    $isDouble &&
    `
     svg {
    position: relative;
    &:first-child {
     left: 6px;
    }
    &:last-child {
        right: 6px;
    }
  }
  `}
  ${({ $isActive }) =>
    $isActive &&
    `
    border: none;
    background-color: var(--accent-color);
    color: var(--white-color);
  `}
`;

export const Ellipsis = styled.p`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 40px;
  height: 40px;
  padding: 10px 13px;
  border-radius: 50%;
  border: 1px solid var(--primary-text-color-5);
  font-size: var(--text-size-s);
  letter-spacing: 0;
`;
