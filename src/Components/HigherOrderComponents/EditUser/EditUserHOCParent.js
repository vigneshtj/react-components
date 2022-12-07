import editableUser from "./editableUser";
import UserInfoForm from "./UserInfoForm";

const UserInfoWrapped = editableUser(UserInfoForm, "123");

function ReadUserHOCParent() {
  return <UserInfoWrapped />;
}

export default ReadUserHOCParent;
