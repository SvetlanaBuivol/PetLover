import { FC } from "react";
import { useCurrentUserFull } from "../../../../hooks/users/useCurrentUserFull";
import userAvatar from "/images/user/user-avatar.png";
import { StyledLink, UserName, Wrapper } from "./UserBar.styled";

interface UserBarProps {
  isHome?: boolean;
}

const UserBar: FC<UserBarProps> = ({ isHome = false }) => {
  const { user } = useCurrentUserFull();
 
  const userPhoto = user?.avatar;

  return (
    <StyledLink to={"/profile"}>
      <Wrapper>
        <img src={userPhoto || userAvatar} alt="User avatar" />
      </Wrapper>
      <UserName $isHome={isHome}>{user?.name}</UserName>
    </StyledLink>
  );
};

export default UserBar;
