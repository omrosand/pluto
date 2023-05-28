import LoggedIn from "../components/LoggedIn";
import NotLoggedIn from "../components/NotLoggedIn";

const Profile = () => {
  // * Her setter jeg bare bruker til true eller false. Lag en context for user senere kanskje?
  const user = false;

  return <>{!user ? <NotLoggedIn /> : <LoggedIn />}</>;
};

export default Profile;
