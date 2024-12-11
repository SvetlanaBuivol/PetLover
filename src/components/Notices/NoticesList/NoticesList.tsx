import { FC } from "react";
import NoticeCard from "../NoticeCard/NoticeCard";
import { IPetInfo } from "../../../models/response/IPetInfo";
import { List } from "./NoticesList.styled";

interface NoticesListProps {
  notices: IPetInfo<string>[];
  openPetInfoModal: (id: string) => void;
  openAttentionModal: () => void;
}

const NoticesList: FC<NoticesListProps> = ({ notices, openPetInfoModal, openAttentionModal }) => {
  console.log("notices", notices);

  return (
    <List>
      {notices.map((notice) => (
        <NoticeCard key={notice._id} notice={notice} openPetInfoModal={openPetInfoModal} openAttentionModal={openAttentionModal} />
      ))}
    </List>
  );
};

export default NoticesList;
