import React from 'react';
import { storiesOf } from '@storybook/react';
import { Types as ButtonTypes } from '../src/components/Types';
import { ThemeProvider } from 'react-jss';

import Button from '../src/components/Button';

const theme = { dark: '--color-base', light: '--white' };

storiesOf('Button', module)
  .add('of type primary', () => (
    <ThemeProvider theme={theme}>
      <Button type={ButtonTypes.PRIMARY} label="Button" />
    </ThemeProvider>
  ))
  .add('with click event', () => (
    <ThemeProvider theme={theme}>
      <Button
        type={ButtonTypes.PRIMARY}
        onClickHandler={() => alert('clicked!')}
        label="Click me!"
      />
    </ThemeProvider>
  ));
