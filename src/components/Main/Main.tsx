import { FC } from "react";
import { Section } from "./Main.styled";
import Logo from "../Logo/Logo";

const Main: FC = () => {
  return (
    <Section>
      <Logo isMain={true} />
    </Section>
  );
};

export default Main;
