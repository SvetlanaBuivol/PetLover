import { FC, ReactNode } from "react";
import { Box } from "./Section.styled";

type SectionProps = {
  children: ReactNode;
};

const Section: FC<SectionProps> = ({children}) => {
    return (
        <Box>{children}</Box>
    )
}

export default Section