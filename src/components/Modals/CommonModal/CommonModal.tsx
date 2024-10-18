import { FC, ReactNode } from "react";
import { createPortal } from "react-dom";

interface ICommonModal {
  isOpen: boolean;
  children: ReactNode;
}

const CommonModal: FC<ICommonModal> = ({ isOpen, children }) => {
  const modalRoot = document.getElementById("modal-root") as HTMLElement | null;
  return isOpen && modalRoot
    ? createPortal(
        <div>
          <div>{children}</div>
        </div>,
        modalRoot
      )
    : null;
};

export default CommonModal;
