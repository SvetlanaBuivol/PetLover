import { useState } from "react";
import Container from "../components/Container/Container";
import SearchInput from "../components/Forms/SearchInput/SearchInput";
import NewsList from "../components/News/NewsList/NewsList";
import Section from "../components/Section/Section";
import Title from "../components/Title/Title";
import { useNews } from "../hooks/news/useNews";

const NewsPage = () => {
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);

  const { news } = useNews(page, keyword);
  if (news) {
    console.log("NewsPage  news", news);
  }

  const handleSearch = (newKeyword: string) => {
    setKeyword(newKeyword);
    setPage(1);
  };

  return (
    <Section>
      <Container>
        <Title title={"News"} />
        <SearchInput keyword={keyword} onSearch={handleSearch} />
        <NewsList news={news?.results || []} />
      </Container>
    </Section>
  );
};

export default NewsPage;
