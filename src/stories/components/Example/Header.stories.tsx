import React from 'react';

import { Header } from '@components/Example';

export default {
  title: 'Example/Header',
};

export const LoggedIn = () => <Header isLogged />;

export const LoggedOut = () => <Header />;
