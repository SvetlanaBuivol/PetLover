import { useMutation } from "@tanstack/react-query";
import AuthService from "../../services/AuthService";
import { useNavigate } from "react-router-dom";

interface ISigninData {
  email: string;
  password: string;
}

export function useSignin() {
  const navigate = useNavigate();

  const { mutate, error, isSuccess } = useMutation({
    mutationFn: (data: ISigninData) =>
      AuthService.signin(data.email, data.password),
    onError: (error) => {
      console.error(error);
    },
    onSuccess: (data) => {
      localStorage.setItem("token", data.data.token);
      navigate("/home");
    },
  });
  return { signin: mutate, error, isSuccess };
}
