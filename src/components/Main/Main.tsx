import { FC } from "react";
import { Logo, Section, Svg } from "./Main.styled";

const Main: FC = () => {
  return (
    <Section>
      <Logo>
        <p>petl</p>
        <Svg>
          <use xlinkHref="src/assets/svg/svgSprite.svg#icon-heart"></use>
        </Svg>
        <p>ve</p>
      </Logo>
    </Section>
  );
};

export default Main;
