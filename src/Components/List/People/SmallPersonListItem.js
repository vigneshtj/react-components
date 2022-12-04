function SmallPersonListItem({ person }) {
  const { name, age } = person;
  console.log(person);
  return (
    <p>
      Name: {name} Age:{age} years
    </p>
  );
}

export default SmallPersonListItem;
