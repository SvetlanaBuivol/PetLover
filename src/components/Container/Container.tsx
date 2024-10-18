import { FC, MouseEvent, ReactNode } from "react";
import { Box } from "./Container.styled";

type ComponentProps = {
  children: ReactNode;
  onClick?: () => void;
};

const Container: FC<ComponentProps> = ({ children, onClick }) => {
  const handleCloseMenu = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget && onClick) {
      onClick();
    }
  };

  return <Box onClick={handleCloseMenu}>{children}</Box>;
};

export default Container;
