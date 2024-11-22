import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Main from "../components/Main/Main";
import Container from "../components/Container/Container";

const MainPage: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Container>
      <Main />
    </Container>
  );
};

export default MainPage;
