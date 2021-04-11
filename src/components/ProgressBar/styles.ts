import styled, { css } from 'styled-components';

import { EBackgroundType } from '@typings/components/ProgressBar';
import { getBackground } from './functions/getBackground';

interface IContainerProps {
  currentProgress: number;
}

interface IBackgroundProps {
  currentProgress: number;
  backgroundType: keyof typeof EBackgroundType;
}

const hideOverflow = (percentage: number) => percentage < 10;

const Container = styled.div<IContainerProps>`
  width: 100%;
  height: 4rem;

  background-color: #fff;
  border-radius: 1.4rem;

  ${({ currentProgress }) =>
    css`
      & {
        overflow: ${hideOverflow(currentProgress) ? 'hidden' : 'unset'};
      }
    `}
`;

const Background = styled.div<IBackgroundProps>`
  position: relative;

  height: 100%;
  width: ${({ currentProgress }) => currentProgress}%;

  border-radius: inherit;

  transition: all 0.25s ease-out;
  transition-property: width;

  ${({ backgroundType }) => getBackground(backgroundType)}

  &::after {
    content: '';
    position: absolute;

    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    border-radius: inherit;

    background-color: transparent;

    transition: all 0.25s ease-out;
    transition-property: width box-shadow;

    ${({ currentProgress }) =>
      css`
        & {
          box-shadow: 0px 2rem 60px
            rgba(0, 0, 0, ${hideOverflow(currentProgress) ? '0' : '0.15'});
        }
      `}
  }
`;

export { Container, Background };
