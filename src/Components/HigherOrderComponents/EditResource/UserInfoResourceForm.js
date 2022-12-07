function UserInfoResourceForm({
  user = { name: null, age: null, hairColor: null },
  onSaveUser,
  onResetUser,
  onChangeUser,
}) {
  return (
    <>
      <form>
        <input
          placeholder="Name"
          value={user.name}
          onChange={(event) => onChangeUser({ name: event.target.value })}
        />
        <input
          placeholder="Age"
          value={user.age}
          onChange={(event) => onChangeUser({ age: event.target.value })}
        />
        <input
          placeholder="Hair Colour"
          value={user.hairColor}
          onChange={(event) => onChangeUser({ hairColor: event.target.value })}
        />
        <button onClick={onSaveUser}>Save</button>
        <button onClick={onResetUser}>Reset</button>
      </form>
    </>
  );
}

export default UserInfoResourceForm;
