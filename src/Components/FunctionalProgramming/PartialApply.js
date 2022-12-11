const Button = ({ size, colour, text, ...props }) => (
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

const withPartialApply = (Component, partialprops) => {
  return (props) => <Component {...props} {...partialprops} />;
};

function PartialApplyParent() {
  const DangerButton = withPartialApply(Button, {
    colour: "Red",
  });

  const BigGreenButton = withPartialApply(Button, {
    size: "large",
    colour: "Green",
  });

  return (
    <>
      <DangerButton text="Don't click me!" />
      <BigGreenButton text="You can click me!" />
    </>
  );
}

export default PartialApplyParent;
