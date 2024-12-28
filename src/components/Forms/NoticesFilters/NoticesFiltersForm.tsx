import { FC, useState } from "react";
import { Control, Controller } from "react-hook-form";
import {
  useCategories,
  useSex,
  useSpecies,
} from "../../../hooks/notices/useNotices";
import { FilterFormData } from "../../../models/request/FilterFormData";
import SearchInput from "../SearchInput/SearchInput";
import Select from "react-select";
import { useCities } from "../../../hooks/locations/useCities";
import { Box, InputsWrapper, StyledForm } from "./NoticesFiltersForm.styled";

interface NoticesFiltersFormProps {
  control: Control<FilterFormData>;
}

const NoticesFiltersForm: FC<NoticesFiltersFormProps> = ({ control }) => {
  const [locationQuery, setLocationQuery] = useState<string>("");

  const { categories } = useCategories();
  const { sex } = useSex();
  const { species } = useSpecies();
  const { cities } = useCities(locationQuery);

  const handleInputChange = (value: string) => {
    setLocationQuery(value);
  };

  return (
    <StyledForm>
      <InputsWrapper>
        <Controller
          name="keyword"
          control={control}
          render={({ field }) => (
            <SearchInput
              initialValue={field.value || ""}
              onSearch={(newKeyword) => field.onChange(newKeyword)}
              isFiltersForm={true}
            />
          )}
        />

        <Box>
          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                className="my-select"
                classNamePrefix="category-select"
                placeholder="Categories"
                options={categories?.map((item) => ({
                  value: item,
                  label: item.charAt(0).toUpperCase() + item.slice(1),
                }))}
                isClearable
                onChange={(selectedOption) =>
                  field.onChange(selectedOption?.value)
                }
                 value={
          field.value
            ? {
                value: field.value,
                label:
                  field.value.charAt(0).toUpperCase() + field.value.slice(1), // Преобразуем значение для отображения
              }
            : null
        } // Преобразуем label в value
              />
            )}
          />

          <Controller
            name="sex"
            control={control}
            render={({ field }) => (
              <Select
                {...field} // Передаємо пропси з контролера
                className="my-select"
                classNamePrefix="sex-select"
                placeholder="By gender"
                options={sex?.map((item) => ({
                  value: item,
                  label: item.charAt(0).toUpperCase() + item.slice(1),
                }))} // Передаємо масив категорій
                isClearable
                onChange={(selectedOption) =>
                  field.onChange(selectedOption?.value)
                } // Оновлення значення через field.onChange
                value={
          field.value
            ? {
                value: field.value,
                label:
                  field.value.charAt(0).toUpperCase() + field.value.slice(1), // Преобразуем значение для отображения
              }
            : null
        } // Преобразуем label в value
              />
            )}
          />
        </Box>

        <Controller
          name="species"
          control={control}
          render={({ field }) => (
            <Select
              {...field} // Передаємо пропси з контролера
              className="my-select type-select"
              classNamePrefix="type-select"
              placeholder="By type"
              options={species?.map((item) => ({
                value: item,
                label: item.charAt(0).toUpperCase() + item.slice(1),
              }))} // Передаємо масив категорій
              isClearable
              onChange={(selectedOption) =>
                field.onChange(selectedOption?.value)
              } // Оновлення значення через field.onChange
              value={
          field.value
            ? {
                value: field.value,
                label:
                  field.value.charAt(0).toUpperCase() + field.value.slice(1), // Преобразуем значение для отображения
              }
            : null
        } // Преобразуем label в value
            />
          )}
        />

        <Controller
          name="locationId"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              className="my-select location-select"
              classNamePrefix="location-select"
              options={cities?.map((city) => ({
                value: city._id,
                label: `${city.cityEn}, ${city.stateEn} (${city.useCounty})`,
              }))}
              placeholder="Location"
              onInputChange={handleInputChange}
              inputValue={locationQuery}
              value={
                field.value
                  ? cities
                      ?.map((city) => ({
                        value: city._id,
                        label: `${city.cityEn}, ${city.stateEn} (${city.useCounty})`,
                      }))
                      .find((option) => option.value === field.value)
                  : undefined
              }
              isClearable
            />
          )}
        />
      </InputsWrapper>

      <Controller
        name="byPopularity"
        control={control}
        render={({ field }) => (
          <label>
            <input
              type="radio"
              value="popular"
              checked={field.value === false}
              onChange={() => field.onChange(false)}
            />
            Popular
          </label>
        )}
      />

      <Controller
        name="byPopularity"
        control={control}
        render={({ field }) => (
          <label>
            <input
              type="radio"
              value="unpopular"
              checked={field.value === true}
              onChange={() => field.onChange(true)}
            />
            Unpopular
          </label>
        )}
      />

      <Controller
        name="byPrice"
        control={control}
        render={({ field }) => (
          <label>
            <input
              type="radio"
              value="cheap"
              checked={field.value === true}
              onChange={() => field.onChange(true)}
            />
            Cheap
          </label>
        )}
      />

      <Controller
        name="byPrice"
        control={control}
        render={({ field }) => (
          <label>
            <input
              type="radio"
              value="expensive"
              checked={field.value === false}
              onChange={() => field.onChange(false)}
            />
            Expensive
          </label>
        )}
      />
    </StyledForm>
  );
};

export default NoticesFiltersForm;
