import withEditableUser from "./withEditableUser";
import UserInfoForm from "./UserInfoForm";

const UserInfoWrapped = withEditableUser(UserInfoForm, "123");

function ReadUserHOCParent() {
  return <UserInfoWrapped />;
}

export default ReadUserHOCParent;
