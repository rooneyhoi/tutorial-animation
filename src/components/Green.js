import React, { useEffect, useState } from 'react';

function Green({ actionStep = 0, finishLoading }) {
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    if (actionStep === 1 || actionStep === 5) {
      setAnimationStep(1);
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
        id='1'
        className={`circle green ${animationStep === 1 ? "pulse" : ""}`}
      ></div>
    </>
  );
}

export default Green;
