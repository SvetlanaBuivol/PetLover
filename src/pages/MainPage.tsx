import { FC, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Main from "../components/Main/Main"

const MainPage: FC = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/home')
        }, 2500)

        return ()=> clearTimeout(timer)
    }, [navigate])
    
    return (
       <Main/>
   ) 
}

export default MainPage