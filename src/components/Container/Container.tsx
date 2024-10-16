import { FC, ReactNode } from "react"
import { Box } from "./Container.styled"

type ComponentProps = {
    children: ReactNode,
}

const Container:FC<ComponentProps> = ({children}) => {
    return (
        <Box>{children}</Box>
   )
}

export default Container