import React from 'react';
import { render } from '@testing-library/react';
import ErrorMessage from '../index';

describe('<ErrorMessage />', () => {
  it('should renders the component', () => {
    const { container } = render(<ErrorMessage />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should display the error message when we set message prop', () => {
    const error = 'Error: This keyword is forbidden!';
    const { queryByText } = render(<ErrorMessage message={error} />);
    expect(queryByText(error)).toBeVisible();
  });
});
