import React from 'react';
import { render } from '@testing-library/react';
import GeneralProvider from '../providers/GeneralProvider';
import { theme } from '../assets/styles/theme';

export const renderWithProviders = (children) => {
  return render(
    <ThemeProvider theme={theme}>
      <GeneralProvider>{children}</GeneralProvider>
    </ThemeProvider>
  );
};
