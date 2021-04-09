import React from 'react';

import { Button } from '@root/components/Example';

export default {
  title: 'Example/Button',
};

export const Primary = () => <Button primary label='Button' />;

export const Secondary = () => <Button label='Button' />;

export const Large = () => <Button label='Button' size='large' />;

export const Small = () => <Button label='Button' size='small' />;
