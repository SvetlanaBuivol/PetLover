import { FC } from "react";
import { FriendsResponse } from "../../../models/response/FriendsResponse";
import FriendCard from "../FriendCard/FriendCard";
import { List } from "./FriendsList.styled";

interface FriendsListProps {
  friends: FriendsResponse[];
}

const FriendsList: FC<FriendsListProps> = ({ friends }) => {
  return (
    <List>
      {friends.map((friend) => (
        <FriendCard key={friend._id} friend={friend} />
      ))}
    </List>
  );
};

export default FriendsList;
