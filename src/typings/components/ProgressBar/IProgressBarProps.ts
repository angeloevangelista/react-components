import { HTMLAttributes } from 'react';
import { EBackgroundType } from './EBackgroundType';

interface IProgressBarProps extends HTMLAttributes<HTMLDivElement> {
  currentProgress: number;
  backgroundType: keyof typeof EBackgroundType;
}

export { IProgressBarProps };
