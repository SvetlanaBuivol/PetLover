import { FC } from "react";
import { FriendsResponse } from "../../../models/response/FriendsResponse";
import { Address, Card, ImageBox, Text, Time, Title, Wrapper } from "./FriendCard.styled";
import { renderWorkDay } from "../../../helpers/renderWorkDay";

interface FriendCardProps {
  friend: FriendsResponse;
}

const FriendCard: FC<FriendCardProps> = ({ friend }) => {

  return (
    <Card>
      <Time>{renderWorkDay(friend?.workDays)}</Time>
      <Wrapper>
        <ImageBox>
          <img src={friend?.imageUrl} alt={friend.title} />
        </ImageBox>
        <div>
          <Title>{friend?.title}</Title>
          <Address>
            <Text><span>Email:</span> {friend?.email || 'website only'}</Text>
            <Text><span>Address:</span> {friend?.address || 'website only'}</Text>
            <Text><span>Phone:</span> {friend?.phone || 'website only'}</Text>
          </Address>
        </div>
      </Wrapper>
    </Card>
  );
};

export default FriendCard;
