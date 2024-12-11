import { FC, useState } from "react";
import Container from "../components/Container/Container";
import NoticesFilters from "../components/Forms/NoticesFilters/NoticesFilters";
import { useNotices } from "../hooks/notices/useNotices";
import NoticesList from "../components/Notices/NoticesList/NoticesList";
import Section from "../components/Section/Section";
import Title from "../components/Title/Title";
import Pagination from "../components/Pagination/Pagination";
import PetInfoModal from "../components/Modals/PetInfoModal/PetInfoModal";
import ContactModal from "../components/Modals/ContactModal/ContactModal";
import AttentionModal from "../components/Modals/AttentionModal/AttentionModal";

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
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isAttentionModalOpen, setIsAttentionModalOpen] = useState(false)

  const isAuth = localStorage.getItem("token");

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

  const handleOpenContactModal = (petId: string) => {
    setSelectedPetId(petId)
    setIsContactModalOpen(true);
  };

  const handleCloseContactModal = () => {
    setIsContactModalOpen(false);
  };

  const handleOpenAttentionModal = () => {
    setIsAttentionModalOpen(true)
  }

   const handleCloseAttentionModal = () => {
    setIsAttentionModalOpen(false)
  }

  return (
    <>
      <Section>
        <Container>
          <Title title={"Find your favorite pet"} />
          <NoticesFilters />
          <NoticesList
            notices={notices?.results || []}
            openPetInfoModal={handleOpenPetInfoModal}
            openAttentionModal={handleOpenAttentionModal}
          />
          <Pagination
            totalPages={notices?.totalPages || 0}
            onPageChange={handlePageChange}
            currentPage={filters.page}
          />
        </Container>
      </Section>

      {isAuth ? (
        <PetInfoModal
          isOpen={isPetInfoModalOpen}
          onClose={handleClosePetInfoModal}
          petId={selectedPetId}
          onOpenContactModal={handleOpenContactModal}
        />
      ) : null}

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={handleCloseContactModal}
        petId={selectedPetId}
      />

      <AttentionModal isOpen={isAttentionModalOpen} onClose={handleCloseAttentionModal} />
    </>
  );
};

export default NoticesPage;
