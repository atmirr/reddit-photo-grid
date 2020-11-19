import React from 'react';
import { render } from '@testing-library/react';
import ImageItem from '../index';

const props = {
  title: 'Sample post',
  thumbnail:
    'https://b.thumbs.redditmedia.com/lkIqoXa0Yhxwhy1rjgw0m6dJFnLVyPcZGpj0wzyTW9w.jpg',
};

describe('<ImageItem />', () => {
  it('should renders the component', () => {
    const { container } = render(<ImageItem {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should display an image when thumbnail prop has been set', () => {
    const { container } = render(<ImageItem thumbnail={props.thumbnail} />);
    expect(container.querySelectorAll('img').length).toBeTruthy();
  });

  it("should contain image's alt text when title prop has been set", () => {
    const { queryByAltText } = render(<ImageItem title={props.title} />);
    expect(queryByAltText(props.title)).toBeTruthy();
  });
});
