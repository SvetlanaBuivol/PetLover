import { FC } from "react";
import { useCurrentUserFull } from "../hooks/users/useCurrentUserFull";

const NoticesPage: FC = () => {
  const { user, error } = useCurrentUserFull();

  if (user) {
    console.log("user", user);
  }
  if (error) {
    console.log("error", error);
  }

  return <div>NoticesPage</div>;
};

export default NoticesPage;
