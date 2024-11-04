import { FC } from "react";
import PetBlock from "../components/PetBlock/PetBlock";
import AuthWhiteContainer from "../components/AuthWhiteContainer/AuthWhiteContainer";
import Title from "../components/Title/Title";
import LinkAuth from "../components/LinkAuth/LinkAuth";
import RegisterForm from "../components/Forms/RegisterForm/RegisterForm";

const RegisterPage: FC = () => {
  return (
    <>
      <PetBlock
        imageSources={{
          mobile: {
            "1x": "images/register/register-img-mb-1x.png",
            "2x": "images/register/register-img-mb-2x.png",
            "3x": "images/register/register-img-mb-3x.png",
          },
          tablet: {
            "1x": "images/register/register-img-tab-1x.png",
            "2x": "images/register/register-img-tab-2x.png",
            "3x": "images/register/register-img-tab-3x.png",
          },
          desktop: {
            "1x": "images/register/register-img-desk-1x.png",
            "2x": "images/register/register-img-desk-2x.png",
            "3x": "images/register/register-img-desk-3x.png",
          },
        }}
        petAdvert={{
          kind: "cat",
          name: "Jack",
          birth: "18.10.2021",
          descr:
            "Jack is a gray Persian cat with green eyes. He loves to be pampered and groomed, and enjoys playing with toys.",
        }}
      />
      <AuthWhiteContainer>
        <Title
          title={"Registration"}
          subtitle={"Thank you for your interest in our platform. "}
        />
        <RegisterForm />
        <LinkAuth
          text={"Already have an account?"}
          link={"Login"}
          page={"/login"}
        />
      </AuthWhiteContainer>
    </>
  );
};

export default RegisterPage;
