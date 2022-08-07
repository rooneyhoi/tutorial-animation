import React, { useEffect, useState } from 'react';

function Orange({ actionStep = 0, finishLoading }) {
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    if (actionStep === 4) {
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
        className={`circle orange ${animationStep === 4 ? "pulse" : ""}`}
      ></div>
    </>
  );
}

export default Orange;
