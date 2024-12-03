import { FC, useState } from "react";
import Container from "../components/Container/Container";
import NoticesFilters from "../components/Forms/NoticesFilters/NoticesFilters";
import { useNotices } from "../hooks/notices/useNotices";
import NoticesList from "../components/Notices/NoticesList/NoticesList";
import Section from "../components/Section/Section";
import Title from "../components/Title/Title";
import Pagination from "../components/Pagination/Pagination";

const NoticesPage: FC = () => {
  const [filters, setFilters] = useState({
    keyword: "",
    category: "",
    species: "",
    locationId: "",
    page: 1,
    sex: "",
    byPrice: false,
    byPopularity: false,
    byDate: false,
  });
  console.log("setFilters", setFilters)

  const { notices } = useNotices(filters);

  const handlePageChange = (page: number) => {
    setFilters((prev) => ({ ...prev, page }))
  }

  return (
    <Section>
      <Container>
        <Title title={'Find your favorite pet'}/>
        <NoticesFilters />
        <NoticesList notices={notices?.results || []} />
        <Pagination
          totalPages={notices?.totalPages || 0}
          onPageChange={handlePageChange}
          currentPage={filters.page}
        />
      </Container>
    </Section>
  );
};

export default NoticesPage;
