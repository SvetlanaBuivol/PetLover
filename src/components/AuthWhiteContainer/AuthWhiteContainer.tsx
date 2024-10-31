import { FC, ReactNode } from "react";
import { Box } from "./AuthWhiteContainer.styled";

interface IAuthContainerProps {
    children: ReactNode;
    isLogin?: boolean;
}

const AuthWhiteContainer: FC<IAuthContainerProps> = ({children, isLogin = false}) => {
    return (
        <Box $isLogin={isLogin}>{children}</Box>
    )
}

export default AuthWhiteContainer