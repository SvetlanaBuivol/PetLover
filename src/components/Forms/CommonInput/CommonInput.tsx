import { useState } from "react";
import { Control, FieldValues, Path, useController } from "react-hook-form";
// import { LoginFormData } from "../../../helpers/validationSchemas";
import VisiblePasswordIcon from "../../VisiblePasswordIcon/VisiblePasswordIcon";
import { CheckedSvg, ErrorMessage, ErrorSvg, Input, SecureMessage, Wrapper } from "./CommonInput.styled";

interface ICommonInput<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  type?: string;
  placeholder?: string;
  resetField?: (name: Path<T>) => void;
}

const CommonInput = <T extends FieldValues>({
  name,
  control,
  type = "text",
  placeholder,
  resetField
}: ICommonInput<T>) => {
  const {
    field,
    fieldState: { error, invalid, isTouched },
  } = useController({ name, control });

  const [visiblePassword, setVisiblePassword] = useState(false);

  const autoComplete = type === "password" ? "current-password" : "on";
  const isPasswordInput =
    field.name === "password" || field.name === "confirmPassword";
  const isPasswordSecure =
    isPasswordInput &&
    !invalid &&
    field.name !== "confirmPassword" &&
    isTouched &&
    field.value;
  const isError = error && !isPasswordInput;

  const togglePasswordVisibility = () => {
    setVisiblePassword(!visiblePassword);
  };

  const handleClearField = () => {
    if (resetField) {
      resetField(name)
    }
  }

  return (
    <>
      <Wrapper>
        <Input
          {...field}
          type={
            isPasswordInput ? (visiblePassword ? "text" : "password") : type
          }
          placeholder={placeholder}
          autoComplete={autoComplete}
          value={field.value ?? ""}
          $isPasswordSecure={isPasswordSecure}
          $isError={!!error}
        />
        {isPasswordInput && (
          <VisiblePasswordIcon
            onClick={togglePasswordVisibility}
            visiblePassword={visiblePassword}
          />
        )}
        {isPasswordSecure && (
          <CheckedSvg>
            <use xlinkHref="svg/svgSprite.svg#icon-check"></use>
          </CheckedSvg>
        )}
        {isError && (
          <ErrorSvg onClick={handleClearField}>
            <use xlinkHref="svg/svgSprite.svg#icon-cross-small"></use>
          </ErrorSvg>
        )}
      </Wrapper>
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
      {isPasswordSecure && <SecureMessage>Password is secure</SecureMessage>}
    </>
  );
};

export default CommonInput;
