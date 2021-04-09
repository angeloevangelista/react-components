import React from 'react';

import { Page } from '@components/Example';

export default {
  title: 'Example/Page',
};

export const LoggedIn = () => <Page />;

export const LoggedOut = () => <Page isLogged />;
