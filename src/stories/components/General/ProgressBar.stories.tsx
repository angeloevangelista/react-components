import React, { useEffect, useState } from 'react';

import { ProgressBar } from '@root';

import {
  EBackgroundType,
  IProgressBarProps,
} from '@root/typings/components/ProgressBar';

import { IStoryTemplate, IStoryConfig } from '@root/stories/typings/';

let timer: ReturnType<typeof setTimeout>;

const Basic: IStoryTemplate<IProgressBarProps> = (args) => {
  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    let nextProgress = currentProgress + 1;

    if (nextProgress > 100) {
      nextProgress = 0;
    }

    timer = setTimeout(() => {
      setCurrentProgress(nextProgress);
    }, 100);

    return () => clearTimeout(timer);
  }, [currentProgress]);

  return (
    <>
      <ProgressBar {...args} style={{ marginBottom: '4rem' }} />
      <ProgressBar {...args} currentProgress={currentProgress} />
    </>
  );
};

const storyConfig: IStoryConfig<typeof ProgressBar> = {
  title: 'General/ProgressBar',
  argTypes: {
    backgroundType: {
      name: 'Background type',
      defaultValue: 'leaf',
      description: 'The background style.',
      control: {
        type: 'inline-radio',
        options: Object.keys(EBackgroundType),
      },
    },
    currentProgress: {
      name: 'Current progress',
      defaultValue: 25,
      description: 'The percentage of progress.',
      control: {
        type: 'number',
      },
    },
  },
};

export { Basic };
export default storyConfig;
