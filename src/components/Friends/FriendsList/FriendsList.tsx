import { FC } from "react";
import { FriendsResponse } from "../../../models/response/FriendsResponse";
import FriendCard from "../FriendCard/FriendCard";

interface FriendsListProps {
  friends: FriendsResponse[];
}

const FriendsList: FC<FriendsListProps> = ({ friends }) => {
  return (
    <ul>
      {friends.map((friend) => (
        <FriendCard key={friend._id} friend={friend} />
      ))}
    </ul>
  );
};

export default FriendsList;
