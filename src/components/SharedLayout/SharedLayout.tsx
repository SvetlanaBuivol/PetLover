import { Suspense, useState } from "react";
import Container from "../Container/Container";
import { StyledHeader } from "./SharedLayout.styled";
import { Outlet, useLocation } from "react-router-dom";
import MobileModal from "../Modals/MobileModal/MobileModal";
import Header from "../Header/Header";

const SharedLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const location = useLocation();
  const isHome = location.pathname === "/home";

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <StyledHeader $isHome={isHome}>
        <Container>
          <Header isHome={isHome} onOpenModal={handleOpenModal} />
        </Container>
      </StyledHeader>
      <main>
        <Container>
          <Suspense>
            <Outlet />
          </Suspense>
        </Container>
      </main>

      <MobileModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        isHome={isHome}
      />
    </>
  );
};

export default SharedLayout;
