import { FC } from "react";
import PetBlock from "../components/PetBlock/PetBlock";
import LoginForm from "../components/Forms/LoginForm/LoginForm";
import Title from "../components/Title/Title";
import AuthWhiteContainer from "../components/AuthWhiteContainer/AuthWhiteContainer";
import LinkAuth from "../components/LinkAuth/LinkAuth";
import Container from "../components/Container/Container";

const LogInPage: FC = () => {
  return (
    <Container padding='0 32px'>
      <PetBlock
        imageSources={{
          mobile: {
            "1x": "images/login/login-img-mb-1x.png",
            "2x": "images/login/login-img-mb-2x.png",
            "3x": "images/login/login-img-mb-3x.png",
          },
          tablet: {
            "1x": "images/login/login-img-tab-1x.png",
            "2x": "images/login/login-img-tab-2x.png",
            "3x": "images/login/login-img-tab-3x.png",
          },
          desktop: {
            "1x": "images/login/login-img-desk-1x.png",
            "2x": "images/login/login-img-desk-2x.png",
            "3x": "images/login/login-img-desk-3x.png",
          },
        }}
        petAdvert={{
          kind: "dog",
          name: "Rich",
          birth: "21.09.2020",
          descr:
            "Rich would be the perfect addition to an active family that loves to play and go on walks. I bet he would love having a doggy playmate too!",
        }}
      />
      <AuthWhiteContainer isLogin={true}>
        <Title
          title={"Log in"}
          subtitle={
            "Welcome! Please enter your credentials to login to the platform:"
          }
        />
        <LoginForm />
        <LinkAuth
          text={"Don’t have an account?"}
          link={"Register"}
          page={"/register"}
        />
      </AuthWhiteContainer>
    </Container>
  );
};

export default LogInPage;
