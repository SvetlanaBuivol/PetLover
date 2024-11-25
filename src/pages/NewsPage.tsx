import { useState } from "react";
import Container from "../components/Container/Container";
import SearchInput from "../components/Forms/SearchInput/SearchInput";
import NewsList from "../components/News/NewsList/NewsList";
import Section from "../components/Section/Section";
import Title from "../components/Title/Title";
import { useNews } from "../hooks/news/useNews";
import Pagination from "../components/Pagination/Pagination";

const NewsPage = () => {
  const [keyword, setKeyword] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const { news } = useNews(currentPage, keyword);
  if (news) {
    console.log("NewsPage  news", news);
  }

  const handleSearch = (newKeyword: string) => {
    setKeyword(newKeyword);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Section>
      <Container>
        <Title title={"News"} />
        <SearchInput onSearch={handleSearch} isNewsPage={true} />
        <NewsList news={news?.results || []} />
        <Pagination
          totalPages={news?.totalPages || 0}
          onPageChange={handlePageChange}
          currentPage={currentPage}
        />
      </Container>
    </Section>
  );
};

export default NewsPage;
