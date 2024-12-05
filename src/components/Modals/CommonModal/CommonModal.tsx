import { FC, MouseEvent, ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import { Backdrop, CloseButton, Content } from "./CommonModal.styled";

interface ICommonModal {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
}

const CommonModal: FC<ICommonModal> = ({ isOpen, children, onClose }) => {
  const modalRoot = document.getElementById("modal-root") as HTMLElement | null;

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

  return isOpen && modalRoot
    ? createPortal(
        <Backdrop onClick={handleBackdropClick}>
          <Content>
            <CloseButton type="button" onClick={() => onClose()}>
              <svg>
                <use xlinkHref="svg/svgSprite.svg#icon-cross-black"></use>
              </svg>
            </CloseButton>
            {children}
          </Content>
        </Backdrop>,
        modalRoot
      )
    : null;
};

export default CommonModal;
