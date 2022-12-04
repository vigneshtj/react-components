function LargePersonListItem({ person }) {
  const { name, age, hairColor, hobbies } = person;

  return (
    <>
      <h3>{name}</h3>
      <p>Age: {age} years</p>
      <p>Hair Colour: {hairColor}</p>
      <h5>Hobbies:</h5>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </>
  );
}

export default LargePersonListItem;
