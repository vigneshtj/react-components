function UserInfoForm({
  user = { name: null, age: null, hairColor: null },
  onSave,
  onReset,
  onChange,
}) {
  return (
    <>
      <form>
        <input
          placeholder="Name"
          value={user.name}
          onChange={(event) => onChange({ name: event.target.value })}
        />
        <input
          placeholder="Age"
          value={user.age}
          onChange={(event) => onChange({ age: event.target.value })}
        />
        <input
          placeholder="Hair Colour"
          value={user.hairColor}
          onChange={(event) => onChange({ hairColor: event.target.value })}
        />
        <button onClick={onSave}>Save</button>
        <button onClick={onReset}>Reset</button>
      </form>
    </>
  );
}

export default UserInfoForm;
