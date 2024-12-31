import { Control, Controller } from "react-hook-form";
import { FilterFormData } from "../../../../models/request/FilterFormData";
import { FC } from "react";
import { StyledInput, StyledLabel } from "./RadioGroup.styled";

interface RadioOption {
  value: boolean;
  label: string;
}

interface RadioGroupProps {
  name: keyof FilterFormData;
  control: Control<FilterFormData>;
  options: RadioOption[];
  reset: (data: FilterFormData) => void; // Добавляем reset как пропс
  filters: FilterFormData;
}

const RadioGroup: FC<RadioGroupProps> = ({
  name,
  control,
  options,
  reset,
  filters,
}) => {
  return (
    <>
      {options.map((option) => (
        <Controller
          key={option.label}
          name={name}
          control={control}
          render={({ field }) => (
            <StyledLabel $isChecked={field.value === option.value}>
              <StyledInput
                type="radio"
                value={String(option.value)}
                checked={field.value === option.value}
                onClick={() => {
                  if (field.value === option.value) {
                    reset({
                      ...filters,
                      [name]: null,
                    });
                  } else {
                    field.onChange(option.value);
                  }
                }}
              />
              {option.label}
              {field.value === option.value && (
                <svg>
                  <use xlinkHref="svg/svgSprite.svg#icon-close"></use>
                </svg>
              )}
            </StyledLabel>
          )}
        />
      ))}
    </>
  );
};

export default RadioGroup;
