import { FC } from "react";
import LogOutButton from "./LogOutButton/LogOutButton";
import UserBar from "./UserBar/UserBar";
import { Box } from "./UserNav.styled";

interface UserNavProps {
  isHome: boolean;
  isHeader?: boolean;
}

const UserNav: FC<UserNavProps> = ({ isHome, isHeader = false }) => {
  return (
    <Box>
      {isHome && isHeader ? null : (
        <LogOutButton isHeader={isHeader} isHome={isHome} />
      )}
      <UserBar isHome={isHome} />
    </Box>
  );
};

export default UserNav;
