function UserInfo({ name, age, hairColor, hobbies }) {
  return (
    <>
      <h6>Name: {name}</h6>
      <h6>Age: {age}</h6>
      <h6>Hair Colour: {hairColor}</h6>
      <h4>Hobbies</h4>
      <ul>
        {hobbies.map((hobby) => (
          <li>{hobby}</li>
        ))}
      </ul>
    </>
  );
}

export default UserInfo;
