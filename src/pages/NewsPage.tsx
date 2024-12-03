import { useEffect, useState } from "react";
import Container from "../components/Container/Container";
import SearchInput from "../components/Forms/SearchInput/SearchInput";
import NewsList from "../components/News/NewsList/NewsList";
import Section from "../components/Section/Section";
import Title from "../components/Title/Title";
import { useNews } from "../hooks/news/useNews";
import Pagination from "../components/Pagination/Pagination";
import { useLocation, useNavigate } from "react-router-dom";

const NewsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const keywordParam = params.get("keyword") || "";
    const pageParam = parseInt(params.get("page") || "1", 10);

    setKeyword(keywordParam);
    setCurrentPage(pageParam);
  }, [location.search]);

  const { news } = useNews(currentPage, keyword);

  const updateURL = (newKeyword: string, page: number) => {
    const params = new URLSearchParams();
    if (newKeyword) params.set("keyword", newKeyword);
    if (page > 1) params.set("page", page.toString());
    navigate(`?${params.toString()}`);
  };

  const handleSearch = (newKeyword: string) => {
    setKeyword(newKeyword);
    setCurrentPage(1);
    updateURL(newKeyword, 1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    updateURL(keyword, page);
  };

  return (
    <Section>
      <Container>
        <Title title={"News"} />
        <SearchInput
          onSearch={handleSearch}
          isNewsPage={true}
          initialValue={keyword}
        />
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
