import { Suspense, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Container from "../Container/Container";
import { StyledHeader } from "./SharedLayout.styled";
import MobileModal from "../Modals/MobileModal/MobileModal";
import Header from "../Header/Header";

const SharedLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const location = useLocation();
  const isHome = location.pathname === "/home";
  const isAuth = !!localStorage.getItem("token");
  console.log("SharedLayout  isAuth", isAuth);

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
          <Header
            isHome={isHome}
            onOpenModal={handleOpenModal}
            isAuth={isAuth}
          />
        </Container>
      </StyledHeader>
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
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
