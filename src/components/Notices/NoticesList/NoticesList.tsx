import { FC } from "react";
import NoticeCard from "../NoticeCard/NoticeCard";
import { IPetInfo } from "../../../models/response/IPetInfo";
import { List } from "./NoticesList.styled";

interface NoticesListProps {
  notices: IPetInfo<string>[];
  openPetInfoModal: (id: string) => void;
  openAttentionModal: () => void;
  favoriteNotices: IPetInfo<string>[];
}

const NoticesList: FC<NoticesListProps> = ({
  notices,
  openPetInfoModal,
  openAttentionModal,
  favoriteNotices,
}) => {
  console.log("notices", notices);

  return (
    <List>
      {notices.map((notice) => {
        const isFavorite = favoriteNotices.some(
          (fav) => fav._id === notice._id
        );
        return (
          <NoticeCard
            key={notice._id}
            isFavorite={isFavorite}
            notice={notice}
            openPetInfoModal={openPetInfoModal}
            openAttentionModal={openAttentionModal}
          />
        );
      })}
    </List>
  );
};

export default NoticesList;
