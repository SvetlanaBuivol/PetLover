import { FC } from "react";
import { FriendsResponse } from "../../../models/response/FriendsResponse";

interface FriendCardProps {
  friend: FriendsResponse;
}

const FriendCard: FC<FriendCardProps> = ({ friend }) => {
  return (
    <li>
      <div>
        <p>from-to</p>
      </div>
      <div>
        <div>
          <img src={friend.imageUrl} alt={friend.title} />
        </div>
        <h3>{friend.title}</h3>
        <address>
          <p>Email: {friend.email}</p>
          <p>Address: : {friend.address}</p>
          <p>Phone: : {friend.phone}</p>
        </address>
      </div>
    </li>
  );
};

export default FriendCard;
