import { FC } from "react";
import { StyledTitle, Subtitle } from "./Title.styled";

interface ITitleProps {
  title: string;
  subtitle?: string;
}

const Title: FC<ITitleProps> = ({ title, subtitle }) => {
  return (
    <>
      <StyledTitle>{title}</StyledTitle>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </>
  );
};

export default Title;
