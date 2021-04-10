import React from 'react';

import { Page } from '@root';

export default {
  title: 'Example/Page',
};

export const LoggedIn = (): JSX.Element => <Page />;

export const LoggedOut = (): JSX.Element => <Page isLogged />;
