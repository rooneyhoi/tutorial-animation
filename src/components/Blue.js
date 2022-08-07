import React, { useEffect, useState } from 'react';

function Blue({ actionStep = 0, finishLoading }) {
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    if (actionStep === 3) {
      setAnimationStep(actionStep);
    }
    return () => {
      setAnimationStep(0);
    };
  }, [actionStep]);

  if (animationStep !== 0) {
    setTimeout(() => {
      finishLoading(animationStep);
    }, 2000);
  }

  return (
    <>
      <div
        id='3'
        className={`circle blue ${animationStep === 3 ? "pulse" : ""}`}
      ></div>
    </>
  );
}

export default Blue;
