import Select from "react-select";
import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-top: 40px;
  background-color: var(--accent-light-color);
  border-radius: 30px;

  @media screen and (min-width: 768px) {
    padding: 40px 32px;
    margin-top: 44px;
  }

  @media screen and (min-width: 1280px) {
    position: relative;
    left: -32px;
    padding: 40px;
    width: 1216px;
    margin-top: 40px;
  }
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  .my-select {
    width: 100%;
    div {
      border: none;
      border-radius: 30px;
      color: inherit;
    }

    .type-select__control,
    .sex-select__control,
    .category-select__control,
    .location-select__control {
      height: 42px;
    }

    .type-select__control--is-focused,
    .sex-select__control--is-focused,
    .category-select__control--is-focused,
    .location-select__control--is-focused {
      border: none;
      box-shadow: none;
    }

    .type-select__menu,
    .sex-select__menu,
    .category-select__menu,
    .location-select__menu {
      margin-top: 4px;
      border: none;
      box-shadow: none;
      border-radius: 15px;
      color: var(--primary-text-color-60);
      padding: 8px;
    }

    .type-select__option--is-focused,
    .sex-select__option--is-focused,
    .category-select__option--is-focused,
    .location-select__option--is-focused {
      background-color: var(--white-color);
    }

    .type-select__option--is-selected,
    .sex-select__option--is-selected,
    .category-select__option--is-selected,
    .location-select__option--is-selected {
      color: var(--accent-color);
      background-color: var(--white-color);
    }

    .type-select__clear-indicator,
    .sex-select__clear-indicator,
    .category-select__clear-indicator,
    .location-select__clear-indicator {
      padding-right: 0;
      svg {
        width: 18px;
        height: 18px;
      }
    }

    .type-select__dropdown-indicator,
    .sex-select__dropdown-indicator,
    .category-select__dropdown-indicator,
    .location-select__dropdown-indicator {
      padding-left: 4px;
    }

    .type-select__option,
    .sex-select__option,
    .category-select__option,
    .location-select__option {
      padding: 4px;
      margin: 0;
    }

    .type-select__indicator-separator,
    .sex-select__indicator-separator,
    .category-select__indicator-separator,
    .location-select__indicator-separator {
      display: none;
    }
  }

  @media screen and (min-width: 768px) {
    gap: 16px;
    div {
      font-size: var(--text-size-s);
    }

    .my-select {
      .type-select__control,
      .sex-select__control,
      .category-select__control,
      .location-select__control {
        height: 48px;
      }
      .category-select__value-container,
      .type-select__value-container,
      .sex-select__value-container,
      .location-select__value-container {
        padding-left: 14px;
      }
    }

    .type-select {
      width: 190px;
    }

    .location-select {
      width: 227px;
    }
  }

  @media screen and (min-width: 1280px) {
    flex-wrap: nowrap;
  }
`;

export const Box = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 356px;
    gap: 16px;
  }

  @media screen and (min-width: 1280px) {
    width: 416px;
  }
`;

export const StyledSelect = styled(Select)`
  width: 100%;
`;

export const Line = styled.span`
  display: block;
  width: 100%;
  height: 1px;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: var(--primary-text-color-10);
`;

export const RadioBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`;