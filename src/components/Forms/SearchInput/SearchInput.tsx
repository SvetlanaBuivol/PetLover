import { ChangeEvent, FC, KeyboardEvent, useEffect, useState } from "react";
import { DeleteButton, SearchButton, Wrapper } from "./SearchInput.styled";

interface SearchInputProps {
  isNewsPage?: boolean;
  initialValue?: string;
  onSearch: (newKeyword: string) => void;
}

const SearchInput: FC<SearchInputProps> = ({
  isNewsPage = false,
  onSearch,
  initialValue = "",
}) => {
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setSearchValue(initialValue);
  }, [initialValue]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleDeleteSearch = () => {
    setSearchValue("");
    onSearch("");
  };

  const handleSearch = () => {
    onSearch(searchValue);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Wrapper $isNewsPage={isNewsPage}>
      <input
        type="text"
        placeholder="Search"
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      {searchValue && (
        <DeleteButton onClick={handleDeleteSearch}>
          <svg>
            <use xlinkHref="svg/svgSprite.svg#icon-cross-black"></use>
          </svg>
        </DeleteButton>
      )}
      <SearchButton onClick={handleSearch}>
        <svg>
          <use xlinkHref="svg/svgSprite.svg#icon-search"></use>
        </svg>
      </SearchButton>
    </Wrapper>
  );
};

export default SearchInput;
