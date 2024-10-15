import { FC, ReactNode } from "react"

type ComponentProps = {
    children: ReactNode,
}

const Container:FC<ComponentProps> = ({children}) => {
    return (
        <div>{children}</div>
   )
}

export default Container