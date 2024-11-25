import { FC, MouseEvent, ReactNode } from "react";
import { Box } from "./Container.styled";
import { useLocation } from "react-router-dom";

type ComponentProps = {
  children: ReactNode;
  onClick?: () => void;
  padding?: string;
};

const Container: FC<ComponentProps> = ({ children, onClick, padding = '0 64px' }) => {
  const location = useLocation();
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/register";

  const handleCloseMenu = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget && onClick) {
      onClick();
    }
  };

  return (
    <Box $isAuthPage={isAuthPage} onClick={handleCloseMenu} $padding={padding}>
      {children}
    </Box>
  );
};

export default Container;
