import editableResource from "./editableResource";
import UserInfoResourceForm from "./UserInfoResourceForm";

const UserInfoWrapped = editableResource(
  UserInfoResourceForm,
  "/users/123",
  "user"
);

function EditResourceHOCParent() {
  return <UserInfoWrapped />;
}

export default EditResourceHOCParent;
