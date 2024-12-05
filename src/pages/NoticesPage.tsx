import { FC, useState } from "react";
import Container from "../components/Container/Container";
import NoticesFilters from "../components/Forms/NoticesFilters/NoticesFilters";
import { useNotices } from "../hooks/notices/useNotices";
import NoticesList from "../components/Notices/NoticesList/NoticesList";
import Section from "../components/Section/Section";
import Title from "../components/Title/Title";
import Pagination from "../components/Pagination/Pagination";
import PetInfoModal from "../components/Modals/PetInfoModal/PetInfoModal";

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
  const [isPetInfoModalOpen, setIsPetInfoModalOpen] = useState(false);
  const [selectedPetId, setSelectedPetId] = useState<string | null>(null);

  const isAuth = localStorage.getItem('token')

  const { notices } = useNotices(filters);

  const handlePageChange = (page: number) => {
    setFilters((prev) => ({ ...prev, page }));
  };

  const handleOpenPetInfoModal = (petId: string) => {
    setSelectedPetId(petId);
    setIsPetInfoModalOpen(true);
  };

  const handleClosePetInfoModal = () => {
    setSelectedPetId(null);
    setIsPetInfoModalOpen(false);
  };

  return (
    <>
      <Section>
        <Container>
          <Title title={"Find your favorite pet"} />
          <NoticesFilters />
          <NoticesList
            notices={notices?.results || []}
            openPetInfoModal={handleOpenPetInfoModal}
          />
          <Pagination
            totalPages={notices?.totalPages || 0}
            onPageChange={handlePageChange}
            currentPage={filters.page}
          />
        </Container>
      </Section>

      {isAuth ? <PetInfoModal
        isOpen={isPetInfoModalOpen}
        onClose={handleClosePetInfoModal}
        petId={selectedPetId}
      /> : null}
      
    </>
  );
};

export default NoticesPage;
