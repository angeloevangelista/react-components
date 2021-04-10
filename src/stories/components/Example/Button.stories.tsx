import React from 'react';

import { Button } from '@root';

export default {
  title: 'Example/Button',
};

export const Primary = (): JSX.Element => <Button primary label='Button' />;

export const Secondary = (): JSX.Element => <Button label='Button' />;

export const Large = (): JSX.Element => <Button label='Button' size='large' />;

export const Small = (): JSX.Element => <Button label='Button' size='small' />;
