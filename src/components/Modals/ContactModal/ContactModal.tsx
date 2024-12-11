import { FC } from "react";
import CommonModal from "../CommonModal/CommonModal";
import { useNoticeById } from "../../../hooks/notices/useNoticeById";
import { List, Title } from "./ContactModal.styled";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  petId: string | null;
}

const ContactModal: FC<ContactModalProps> = ({ isOpen, onClose, petId }) => {
  const { notice } = useNoticeById(petId);

  return (
    <CommonModal isOpen={isOpen} onClose={onClose}>
      <Title>How would you like to contact?</Title>
      <List>
        <li>
          <a href={`mailto:${notice?.user.email}`}>Email</a>
        </li>
        <li>
          <a href={`tel:${notice?.user.phone}`}>Call</a>
        </li>
      </List>
    </CommonModal>
  );
};

export default ContactModal;
