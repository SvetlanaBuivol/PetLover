import { FC } from "react";
import CommonModal from "../CommonModal/CommonModal";
import AuthNav from "../../Header/AuthNav/AuthNav";
import { Box, Icon, Text, Title } from "./AttentionModal.styled";

interface AttentionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AttentionModal: FC<AttentionModalProps> = ({ isOpen, onClose }) => {
  return (
    <CommonModal isOpen={isOpen} onClose={onClose}>
      <Icon>
        <img src="images/petBlock/petImg.png" alt="Pet icon" />
      </Icon>
      <Title>Attention</Title>
      <Text>
        We would like to remind you that certain functionality is available only
        to authorized users.If you have an account, please log in with your
        credentials. If you do not already have an account, you must register to
        access these features.
      </Text>
      <Box>
        <AuthNav isHome={false} isHeader={false} onClose={onClose} />
        </Box>
    </CommonModal>
  );
};

export default AttentionModal;
