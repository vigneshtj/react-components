import { useState, useEffect } from "react";

function ControlledForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [hairColour, setHairColour] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (name.length < 2) setError("* Name must be more then 2 chars");
    else setError("");
  }, [name]);

  const handleSubmit = (e) => {
    alert(`Name: ${name}\nAge: ${age}\nHair Colour: ${hairColour}`);
  };
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="Hair Colour"
          value={hairColour}
          onChange={(e) => setHairColour(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
      {error}
    </>
  );
}

export default ControlledForm;
