import { FC, useState } from "react";
import { Control, useController } from "react-hook-form";
import { LoginFormData } from "../../../helpers/validationSchemas";
import VisiblePasswordIcon from "../../VisiblePasswordIcon/VisiblePasswordIcon";
import { Input, Wrapper } from "./CommonInput.styled";

interface ICommonInput {
  control: Control<LoginFormData>;
  name: keyof LoginFormData;
  type?: string;
  placeholder?: string;
}

const CommonInput: FC<ICommonInput> = ({
  name,
  control,
  type = "text",
  placeholder,
}) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });
  const [visiblePassword, setVisiblePassword] = useState(false);

  const autoComplete = type === "password" ? "current-password" : "on";
  const isPasswordInput = field.name === "password";

  const togglePasswordVisibility = () => {
    setVisiblePassword(!visiblePassword);
  };

  return (
    <Wrapper>
      <Input
        {...field}
        type={isPasswordInput ? (visiblePassword ? "text" : "password") : type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        value={field.value ?? ""}
      />
      {error && <span>{error.message}</span>}
      {isPasswordInput && (
        <VisiblePasswordIcon
          onClick={togglePasswordVisibility}
          visiblePassword={visiblePassword}
        />
      )}
    </Wrapper>
  );
};

export default CommonInput;
