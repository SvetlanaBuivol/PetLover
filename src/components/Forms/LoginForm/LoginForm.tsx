import { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginFormData, loginSchema } from "../../../helpers/validationSchemas";
import CommonInput from "../CommonInput/CommonInput";
import { Button, Form } from "./LoginForm.styled";
import { useSignin } from "../../../hooks/auth/useSignin";

const LoginForm: FC = () => {
  const { control, handleSubmit, resetField, reset } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  });

  const { signin } = useSignin();

  const onSubmit = (data: LoginFormData) => {
    console.log("Login data: ", data);
    signin({ email: data.email, password: data.password });
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
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
      <Button type="submit">Log in</Button>
    </Form>
  );
};

export default LoginForm;
