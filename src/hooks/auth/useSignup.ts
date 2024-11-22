import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import AuthService from "../../services/AuthService";

interface ISignupData {
  email: string;
  password: string;
  name: string;
}

export function useSignup() {
  const navigate = useNavigate();

  const { mutate, error, isSuccess } = useMutation({
    mutationFn: (data: ISignupData) =>
      AuthService.signup(data.email, data.password, data.name),
    onError: (error) => {
      console.error(error);
    },
    onSuccess: (data) => {
      localStorage.setItem("token", data.data.token);
      navigate("/home");
    },
  });
  return { signup: mutate, error, isSuccess };
}
