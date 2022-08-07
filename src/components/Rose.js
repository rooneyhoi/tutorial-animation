import React, { useEffect, useState } from 'react';

function Rose({ actionStep = 0, finishLoading }) {
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    if (actionStep === 2) {
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
        id='2'
        className={`circle rose ${animationStep === 2 ? "pulse" : ""}`}
      ></div>
    </>
  );
}

export default Rose;
