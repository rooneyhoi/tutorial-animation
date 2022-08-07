import React, { useCallback, useEffect, useState } from 'react';

import Blue from './components/Blue';
import Green from './components/Green';
import Orange from './components/Orange';
import Rose from './components/Rose';

const ANIMATION_STEPS = [0, 1, 2, 3, 4, 5];

function TutorialStart() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step === 0) {
      setTimeout(() => {
        setStep(1);
      }, 2000);
    }

    return () => {
      setStep(0);
    };
  }, []);

  const moveToNextStep = useCallback(
    (finishStep) => {
      const nextItem =
        ANIMATION_STEPS.findIndex((item) => item === finishStep) + 1;
      const nextStep = ANIMATION_STEPS[nextItem];
      setStep(nextStep);
    },
    [step]
  );

  return (
    <>
      <div className='center'>
        <Green actionStep={step} finishLoading={moveToNextStep} />
        <Rose actionStep={step} finishLoading={moveToNextStep} />
        <Blue actionStep={step} finishLoading={moveToNextStep} />
        <Orange actionStep={step} finishLoading={moveToNextStep} />
      </div>
    </>
  );
}

export default TutorialStart;
