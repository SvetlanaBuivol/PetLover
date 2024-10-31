import { FC, MouseEvent, ReactNode } from "react";
import { Box } from "./Container.styled";
import { useLocation } from "react-router-dom";

type ComponentProps = {
  children: ReactNode;
  onClick?: () => void;
};

const Container: FC<ComponentProps> = ({ children, onClick }) => {
  const location = useLocation()
  const isAuthPage = location.pathname === '/login';
  
  const handleCloseMenu = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget && onClick) {
      onClick();
    }
  };

  return <Box $isAuthPage={isAuthPage} onClick={handleCloseMenu}>{children}</Box>;
};

export default Container;
