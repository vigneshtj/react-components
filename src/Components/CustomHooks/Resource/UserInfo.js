import useResource from "./useResource";

function UserInfo({ userId }) {
  const user = useResource(`/users/${userId}`);

  const { name, age, hairColor, hobbies } = user || {};
  return user ? (
    <>
      <h6>Name: {name}</h6>
      <h6>Age: {age}</h6>
      <h6>Hair Colour: {hairColor}</h6>
      <h4>Hobbies</h4>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </>
  ) : (
    <p>loading...</p>
  );
}

export default UserInfo;
