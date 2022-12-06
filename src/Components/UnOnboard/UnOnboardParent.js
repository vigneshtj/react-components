import UnOnboard from "./UnOnboard";

const Step1 = ({ goToNext }) => (
  <>
    <h1>Step 1</h1>
    <button onClick={() => goToNext({ name: "John Doe" })}>Next</button>
  </>
);

const Step2 = ({ goToNext }) => (
  <>
    <h1>Step 2</h1>
    <button onClick={() => goToNext({ age: 100 })}>Next</button>
  </>
);

const Step3 = ({ goToNext }) => (
  <>
    <h1>Step 3</h1>
    <button onClick={() => goToNext({ hairColour: "brown" })}>Next</button>
  </>
);

function UnOnboardParent() {
  return (
    <UnOnboard
      onFinish={(data) =>
        alert(`On Boarding Completed!\n Data: ${JSON.stringify(data)}`)
      }
    >
      <Step1 />
      <Step2 />
      <Step3 />
    </UnOnboard>
  );
}

export default UnOnboardParent;
