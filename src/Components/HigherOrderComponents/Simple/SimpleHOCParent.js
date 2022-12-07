import UserInfo from "./UserInfo";
import printProps from "./printProps";

const UserInfoWrapped = printProps(UserInfo);

function SimpleHOCParent() {
  return (
    <UserInfoWrapped
      name={"John"}
      age={50}
      hairColor={"Grey"}
      hobbies={["Cricket", "Games"]}
    />
  );
}

export default SimpleHOCParent;
