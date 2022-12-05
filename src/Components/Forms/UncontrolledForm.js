import { useRef } from "react";

function UncontrolledForm() {
  const nameRef = useRef();
  const ageRef = useRef();
  const hairColourRef = useRef();

  const handleSubmit = (e) => {
    alert(
      `Name: ${nameRef.current.value}\nAge: ${ageRef.current.value}\nHair Colour: ${hairColourRef.current.value}`
    );
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" ref={nameRef} />
        <input type="text" placeholder="Age" ref={ageRef} />
        <input type="text" placeholder="Hair Colour" ref={hairColourRef} />
        <input type="submit" value="submit" />
      </form>
    </>
  );
}

export default UncontrolledForm;
