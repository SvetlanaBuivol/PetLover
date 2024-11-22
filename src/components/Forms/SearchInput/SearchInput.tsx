import { ChangeEvent, FC } from "react";

interface SearchInputProps {
  keyword: string;
  onSearch: (newKeyword: string) => void;
}

const SearchInput: FC<SearchInputProps> = ({ keyword, onSearch }) => {
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={keyword}
        onChange={handleSearch}
      />
      <button>Click</button>
    </div>
  );
};

export default SearchInput;
