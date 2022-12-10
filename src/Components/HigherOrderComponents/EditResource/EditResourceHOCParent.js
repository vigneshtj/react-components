import withEditableResource from "./withEditableResource";
import UserInfoResourceForm from "./UserInfoResourceForm";

const UserInfoWrapped = withEditableResource(
  UserInfoResourceForm,
  "/users/123",
  "user"
);

function EditResourceHOCParent() {
  return <UserInfoWrapped />;
}

export default EditResourceHOCParent;
