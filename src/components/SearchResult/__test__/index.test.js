import React from 'react';
import { render } from '@testing-library/react';
import SearchResult from '../index';

describe('<SearchResult />', () => {
  it('should renders the component', () => {
    const { container } = render(<SearchResult />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
