import { FC, useEffect, useState } from "react";
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
import { useCurrentUser } from "../hooks/users/useCurrentUser";
import { useAddToFav } from "../hooks/notices/useAddToFav";
import { useRemoveFromFav } from "../hooks/notices/useRemoveFromFav";

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
  const [isAttentionModalOpen, setIsAttentionModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const isAuth = localStorage.getItem("token");

  const { user } = useCurrentUser();
  const { addToFav } = useAddToFav(selectedPetId);
  const { removeFromFav } = useRemoveFromFav(selectedPetId);
  const { notices } = useNotices(filters);
  console.log("notice page USER", user);

  useEffect(() => {
    if (user?.data && selectedPetId) {
      const favorite = user.data.noticesFavorites.some(
        (item) => item._id === selectedPetId
      );
      setIsFavorite(favorite);
    } else {
      setIsFavorite(false);
    }
  }, [user, selectedPetId]);

  const handleAddToFav = () => {
    if (selectedPetId) {
      addToFav(selectedPetId, {
        onSuccess: () => {
          console.log("Successfully added to favorites");
          setIsFavorite(true);
        },
        onError: (error) => {
          console.error("Failed to add to favorites", error);
          console.error("Failed to add to favorites");
        },
      });
    }
  };

  const handleRemoveFromFav = () => {
    if (selectedPetId) {
      removeFromFav(selectedPetId, {
        onSuccess: () => {
          console.log("Successfully removed from favorites");
          setIsFavorite(false);
        },
        onError: (error) => {
          console.log("Failed to remove to favorites", error);
        },
      });
    }
  };

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
    setSelectedPetId(petId);
    setIsContactModalOpen(true);
  };

  const handleCloseContactModal = () => {
    setIsContactModalOpen(false);
  };

  const handleOpenAttentionModal = () => {
    setIsAttentionModalOpen(true);
  };

  const handleCloseAttentionModal = () => {
    setIsAttentionModalOpen(false);
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
            openAttentionModal={handleOpenAttentionModal}
            favoriteNotices={user?.data?.noticesFavorites || []}
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
          isFavorite={isFavorite}
          removeFromFav={handleRemoveFromFav}
          addToFav={handleAddToFav}
        />
      ) : null}

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={handleCloseContactModal}
        petId={selectedPetId}
      />

      <AttentionModal
        isOpen={isAttentionModalOpen}
        onClose={handleCloseAttentionModal}
      />
    </>
  );
};

export default NoticesPage;
