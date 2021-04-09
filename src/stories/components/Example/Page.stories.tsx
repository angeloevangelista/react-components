import React from 'react';

import { Page } from '@components/Example';

export default {
  title: 'Example/Page',
};

export const LoggedIn = (): JSX.Element => <Page />;

export const LoggedOut = (): JSX.Element => <Page isLogged />;
