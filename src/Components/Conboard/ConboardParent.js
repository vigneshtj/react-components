import { useState } from "react";

import Conboard from "./Conboard";

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
    <p>Congrats!! you qualified for senior discount</p>
    <button onClick={() => goToNext({})}>Next</button>
  </>
);

const Step4 = ({ goToNext }) => (
  <>
    <h1>Step 4</h1>
    <button onClick={() => goToNext({ hairColour: "brown" })}>Next</button>
  </>
);

function UnOnboardParent() {
  const [onBoardingData, setOnBoardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const onNext = (stepData) => {
    setOnBoardingData({
      ...stepData,
      ...onBoardingData,
    });
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <Conboard currentIndex={currentIndex} onNext={onNext}>
      <Step1 />
      <Step2 />
      {onBoardingData.age > 50 && <Step3 />}
      <Step4 />
    </Conboard>
  );
}

export default UnOnboardParent;
