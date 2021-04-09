import React from 'react';

import { Header } from '@components/Example';

export default {
  title: 'Example/Header',
};

export const LoggedIn = (): JSX.Element => <Header isLogged />;

export const LoggedOut = (): JSX.Element => <Header />;
