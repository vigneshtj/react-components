import withUser from "./withUser";
import UserInfo from "./UserInfo";

const UserInfoWrapped = withUser(UserInfo, "123");

function ReadUserHOCParent() {
  return <UserInfoWrapped />;
}

export default ReadUserHOCParent;
