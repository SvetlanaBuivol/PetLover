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
import {
  Box,
  InputsWrapper,
  Line,
  RadioBox,
  StyledForm,
} from "./NoticesFiltersForm.styled";
import RadioGroup from "./RadioGroup/RadioGroup";

interface NoticesFiltersFormProps {
  control: Control<FilterFormData>;
  reset: (data: FilterFormData) => void;
  filters: FilterFormData;
}

const NoticesFiltersForm: FC<NoticesFiltersFormProps> = ({
  control,
  reset,
  filters,
}) => {
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
                          field.value.charAt(0).toUpperCase() +
                          field.value.slice(1),
                      }
                    : null
                }
              />
            )}
          />

          <Controller
            name="sex"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                className="my-select"
                classNamePrefix="sex-select"
                placeholder="By gender"
                options={sex?.map((item) => ({
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
                          field.value.charAt(0).toUpperCase() +
                          field.value.slice(1),
                      }
                    : null
                }
              />
            )}
          />
        </Box>

        <Controller
          name="species"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              className="my-select type-select"
              classNamePrefix="type-select"
              placeholder="By type"
              options={species?.map((item) => ({
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
                        field.value.charAt(0).toUpperCase() +
                        field.value.slice(1),
                    }
                  : null
              }
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

      <Line></Line>

      <RadioBox>
        <RadioGroup
          control={control}
          name="byPopularity"
          options={[
            { value: false, label: "Popular" },
            { value: true, label: "Unpopular" },
          ]}
          reset={reset}
          filters={filters}
        />

        <RadioGroup
          name="byPrice"
          control={control}
          options={[
            { value: true, label: "Cheap" },
            { value: false, label: "Expensive" },
          ]}
          reset={reset}
          filters={filters}
        />
        </RadioBox>
    </StyledForm>
  );
};

export default NoticesFiltersForm;
