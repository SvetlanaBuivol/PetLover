import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import AuthService from "../../services/AuthService";

export function useLogout() {
  const navigate = useNavigate();

  const { mutate, error, isSuccess } = useMutation({
    mutationFn: () => AuthService.signout(),
    onError: (error) => {
      console.error(error);
    },
    onSuccess: () => {
      localStorage.removeItem("token");
      navigate("/home");
    },
  });
  return { signout: mutate, error, isSuccess };
}
