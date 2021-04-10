import React, { useEffect, useState } from 'react';

import { IProgressBarProps } from '@typings/components/ProgressBar';

import * as SC from './styles';

const ProgressBar: React.FC<IProgressBarProps> = ({
  backgroundType,
  currentProgress,
  ...rest
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProgress(currentProgress > 100 ? 100 : currentProgress);
    }, 100);

    return () => clearInterval(timeout);
  }, [currentProgress]);

  return (
    <SC.Container currentProgress={progress} {...rest}>
      <SC.Background
        backgroundType={backgroundType}
        currentProgress={progress}
      />
    </SC.Container>
  );
};

export { ProgressBar };
