import { yupResolver } from "@hookform/resolvers/yup";
import { FC } from "react";
import { useForm } from "react-hook-form";
import {
  RegisterFormData,
  registerSchema,
} from "../../../helpers/validationSchemas";
import { Form } from "../LoginForm/LoginForm.styled";
import CommonInput from "../CommonInput/CommonInput";
import { Button } from "./RegisterForm.styled";
import { useSignup } from "../../../hooks/auth/useSignup";

const RegisterForm: FC = () => {
  const { control, handleSubmit, resetField, reset } =
    useForm<RegisterFormData>({
      resolver: yupResolver(registerSchema),
      mode: "onChange",
    });
  
  const {signup, error} = useSignup()

  const onSubmit = (data: RegisterFormData) => {
    console.log("Register data: ", data);
    signup({email: data.email, password: data.password, name: data.name})
    reset();
    if (error) {
      console.error(error)
    }
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <CommonInput
        control={control}
        name="name"
        type="text"
        placeholder="Name"
        resetField={resetField}
      />
      <CommonInput
        control={control}
        name="email"
        type="email"
        placeholder="Email"
        resetField={resetField}
      />
      <CommonInput
        control={control}
        name="password"
        type="password"
        placeholder="Password"
      />
      <CommonInput
        control={control}
        name="confirmPassword"
        type="password"
        placeholder="Confirm password"
      />
      <Button type="submit">Registration</Button>
    </Form>
  );
};

export default RegisterForm;
