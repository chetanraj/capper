import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Button from '../components/atoms/button';

test('should test Button component', () => {
  const label = 'Default';
  const { getByText } = render(<Button>Default</Button>);

  expect(getByText(label)).toBeInTheDocument();
});
