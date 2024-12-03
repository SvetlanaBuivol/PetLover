import { FC } from "react";
import NoticeCard from "../NoticeCard/NoticeCard";
import { IPetInfo } from "../../../models/response/IPetInfo";
import { List } from "./NoticesList.styled";

interface NoticesListProps {
  notices: IPetInfo[];
}

const NoticesList: FC<NoticesListProps> = ({ notices }) => {
  console.log("notices", notices);

  return (
    <List>
      {notices.map((notice) => (
        <NoticeCard key={notice._id} notice={notice} />
      ))}
    </List>
  );
};

export default NoticesList;
