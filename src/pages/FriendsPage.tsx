import { FC } from "react";
import { useFriends } from "../hooks/friends/useFriends";
import Container from "../components/Container/Container";
import Section from "../components/Section/Section";
import FriendsList from "../components/Friends/FriendsList/FriendsList";
import Title from "../components/Title/Title";

const FriendsPage: FC = () => {
  const { friends } = useFriends();

  if (friends) {
    console.log("friends", friends);
  }

  return (
    <Section>
          <Container>
              <Title title={'Friends'} />
        <FriendsList friends={friends || []} />
      </Container>
    </Section>
  );
};

export default FriendsPage;
