import { FC } from "react";
import NoticeCard from "../NoticeCard/NoticeCard";
import { IPetInfo } from "../../../models/response/IPetInfo";
import { List } from "./NoticesList.styled";

interface NoticesListProps {
  notices: IPetInfo[];
  openPetInfoModal: (id: string) => void;
}

const NoticesList: FC<NoticesListProps> = ({ notices, openPetInfoModal }) => {
  console.log("notices", notices);

  return (
    <List>
      {notices.map((notice) => (
        <NoticeCard key={notice._id} notice={notice} openPetInfoModal={openPetInfoModal} />
      ))}
    </List>
  );
};

export default NoticesList;
