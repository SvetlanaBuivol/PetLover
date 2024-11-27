import { FC } from "react";
import { FriendsResponse } from "../../../models/response/FriendsResponse";
import {
  Address,
  Card,
  ImageBox,
  Link,
  Text,
  Time,
  Title,
  Wrapper,
} from "./FriendCard.styled";
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
          <a href={friend?.url} target="_blank" rel="noopener noreferrer">
            <img src={friend?.imageUrl} alt={friend.title} />
          </a>
        </ImageBox>
        <div>
          <Title>{friend?.title}</Title>
          <Address>
            {friend?.email ? (
              <Link
                href={`mailto:${friend.email}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Email:</span> {friend?.email || "website only"}
              </Link>
            ) : (
              <Text>
                <span>Email:</span> website only
              </Text>
            )}
            {friend?.address ? (
              <Link
                href={friend?.addressUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Address:</span> {friend?.address || "website only"}
              </Link>
            ) : (
              <Text>
                <span>Address:</span> website only
              </Text>
            )}
            {friend.phone ? (
              <Link
                href={`tel:${friend.phone}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Phone:</span> {friend?.phone || "website only"}
              </Link>
            ) : (
              <Text>
                <span>Phone:</span> website only
              </Text>
            )}
          </Address>
        </div>
      </Wrapper>
    </Card>
  );
};

export default FriendCard;
