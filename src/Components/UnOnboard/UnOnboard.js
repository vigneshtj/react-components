import React, { useState } from "react";

function UnOnboard({ children, onFinish }) {
  const [onBoardingData, setOnBoardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentChild = React.Children.toArray(children)[currentIndex];

  const goToNext = (stepData) => {
    const nextIndex = currentIndex + 1;
    const updatedData = {
      ...stepData,
      ...onBoardingData,
    };

    if (nextIndex < children.length) setCurrentIndex(nextIndex);
    else onFinish(updatedData);
    setOnBoardingData(updatedData);
  };

  if (React.isValidElement(currentChild))
    return React.cloneElement(currentChild, { goToNext });

  return currentChild;
}

export default UnOnboard;
