import { FC } from "react";
import { StyledLink, Text, Wrapper } from "./LinkAuth.styled";

interface ILinkAuthProps {
  text: string;
  link: string;
  page: string;
}

const LinkAuth: FC<ILinkAuthProps> = ({ text, link, page }) => {
  return (
    <Wrapper>
      <Text>{text}</Text>
      <StyledLink to={`${page}`}>{link}</StyledLink>
    </Wrapper>
  );
};

export default LinkAuth;
