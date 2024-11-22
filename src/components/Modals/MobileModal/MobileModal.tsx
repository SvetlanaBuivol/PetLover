import { FC, MouseEvent, useEffect } from "react";
import { createPortal } from "react-dom";
import { Backdrop, Button, Modal, Svg } from "./MobileModal.styled";
import Container from "../../Container/Container";
import Navigation from "../../Header/Navigation/Navigation";
import AuthNav from "../../Header/AuthNav/AuthNav";
import LogOutButton from "../../Header/UserNav/LogOutButton/LogOutButton";

interface IMobileModal {
  isOpen: boolean;
  onClose: () => void;
  isHome: boolean;
}

const MobileModal: FC<IMobileModal> = ({ isOpen, onClose, isHome = false }) => {
  const isAuth = localStorage.getItem("token");

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, onClose]);

  const modalRoot = document.getElementById("modal-root") as HTMLElement | null;
  return isOpen && modalRoot
    ? createPortal(
        <Backdrop onClick={handleBackdropClick}>
          <Container onClick={onClose}>
            <Modal $isHome={isHome}>
              <Button onClick={onClose}>
                <Svg $isHome={isHome}>
                  <use xlinkHref="svg/svgSprite.svg#icon-close"></use>
                </Svg>
              </Button>
              <Navigation onClose={onClose} isHome={isHome} />
              {isAuth ? (
                <LogOutButton isHome={isHome} onClose={onClose}/>
              ) : (
                <AuthNav isHome={isHome} onClose={onClose} />
              )}
            </Modal>
          </Container>
        </Backdrop>,
        modalRoot
      )
    : null;
};

export default MobileModal;
