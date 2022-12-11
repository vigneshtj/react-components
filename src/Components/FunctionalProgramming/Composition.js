import React from "react";

const Button = ({ size, colour, text, ...props }) => {
  return (
    <button
      style={{
        padding: size === "large" ? "32px" : "8px",
        size: size === "large" ? "32px" : "16px",
        background: colour,
      }}
    >
      {text}
    </button>
  );
};

const DangerButton = (props) => <Button {...props} colour="Red" />;

const BigSuccessButton = (props) => (
  <Button {...props} colour="Green" size="large" />
);

function Composition() {
  return (
    <>
      <DangerButton text="Don't click me!" />
      <BigSuccessButton text="You can click me!" />
    </>
  );
}

export default Composition;
