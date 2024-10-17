import { FC } from "react";
import { LogoBox, Svg } from "./Logo.styled";

interface ILogo {
  isHome?: boolean;
  isMain?: boolean;
}

const Logo: FC<ILogo> = ({isHome = false, isMain = false}) => {
  return (
    <LogoBox $isHome={isHome} $isMain={isMain}>
      <p>petl</p>
      <Svg $isHome={isHome}>
        <use xlinkHref="svg/svgSprite.svg#icon-heart"></use>
      </Svg>
      <p>ve</p>
    </LogoBox>
  );
};

export default Logo;
