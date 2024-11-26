import { FC } from "react";
import { FriendsResponse } from "../../../models/response/FriendsResponse";
import { Card, ImageBox, Time, Wrapper } from "./FriendCard.styled";

interface FriendCardProps {
  friend: FriendsResponse;
}

const FriendCard: FC<FriendCardProps> = ({ friend }) => {
  const todayIndex = new Date().getDay() - 1;
  const today = todayIndex < 0 ? 6 : todayIndex;
  const workDay = friend.workDays?.[today];

  const renderWorkDay = () => {
    if (!workDay) {
      return "Day and Night";
    }

    if (!workDay.isOpen) {
      return "Closed";
    }

    return `${workDay.from} - ${workDay.to}`;
  };

  return (
    <Card>
      <Time>{renderWorkDay()}</Time>
      <Wrapper>
        <ImageBox>
          <img src={friend.imageUrl} alt={friend.title} />
        </ImageBox>
        <div>
          <h3>{friend.title}</h3>
          <address>
            <p>Email: {friend.email}</p>
            <p>Address: : {friend.address}</p>
            <p>Phone: : {friend.phone}</p>
          </address>
        </div>
      </Wrapper>
    </Card>
  );
};

export default FriendCard;
