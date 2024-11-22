import { FC } from "react";
import { useLogout } from "../../../../hooks/auth/useLogout";
import { Button } from "./LogOutButton.styled";

interface LogOutButtonProps { 
    isHome: boolean;
    isHeader?: boolean;
    onClose?: () => void;
}

const LogOutButton: FC<LogOutButtonProps> = ({isHome, isHeader = false, onClose}) => {
  const { signout } = useLogout();

  const handleLogoutClick = () => {
      signout();
      if (onClose) {
           onClose()
      }
  };
  return <Button $isHeader={isHeader} $isHome={isHome} onClick={handleLogoutClick}>LogOut</Button>;
};

export default LogOutButton;
