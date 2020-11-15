// @flow
import React from 'react';
import type { Element } from 'react';
import { isEmpty } from 'lodash';
import styled from 'styled-components';
import ImageItem from './components/ImageItem';
import type { ImagesGridProps } from './types.js';

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 30px 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

function ImagesGrid({ posts }: ImagesGridProps): Element<'div'> {
  return (
    <Container>
      {!isEmpty(posts) &&
        posts.map(({ title, thumbnail }, index) => (
          <ImageItem title={title} thumbnail={thumbnail} key={index} />
        ))}
    </Container>
  );
}

export default ImagesGrid;
