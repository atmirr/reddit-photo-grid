import React from 'react';
import { render } from '@testing-library/react';
import ImagesGrid from '../index';

const posts = [
  {
    title: 'First sample post',
    thumbnail:
      'https://b.thumbs.redditmedia.com/lkIqoXa0Yhxwhy1rjgw0m6dJFnLVyPcZGpj0wzyTW9w.jpg',
  },
  {
    title: 'Second sample post',
    thumbnail:
      'https://a.thumbs.redditmedia.com/1RYKuLjrXVBam_FoGrBXfpdSxYMd52wU9J6RcZA0G88.jpg',
  },
];

describe('<ImagesGrid />', () => {
  it('should renders the component', () => {
    const { container } = render(<ImagesGrid />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should display images when posts prop is passed', () => {
    const { container } = render(<ImagesGrid posts={posts} />);
    expect(container.querySelectorAll('img').length).toEqual(2);
  });

  it("should contain post's title as the alt text for images", () => {
    const { queryByAltText } = render(<ImagesGrid posts={posts} />);
    expect(queryByAltText('First sample post')).toBeTruthy();
    expect(queryByAltText('Second sample post')).toBeTruthy();
  });
});
