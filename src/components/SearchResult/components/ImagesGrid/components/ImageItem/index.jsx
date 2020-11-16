// @flow
import React from 'react';
import type { Element } from 'react';
import styled from 'styled-components';
import type { ImageItemProp } from './types.js';

const Container = styled.div`
  padding: 1.5em 1.3em;
  text-align: center;
`;
const ImageWrapper = styled.div`
  display: flex;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  box-shadow: 0 0 6px 4px #e3e3e3;
  transition: all 300ms ease-out;
  & img {
    border-radius: 2px;
  }
  &:hover {
    transform: scale(1.01);
    border: 1px solid #aeaeae;
    box-shadow: 0 0 14px 2px #aaaaaa;
  }
`;

function ImageItem({ title, thumbnail }: ImageItemProp): Element<'div'> {
  return (
    <Container>
      <ImageWrapper>
        <img src={thumbnail} alt={title} width={200} height={200} />
      </ImageWrapper>
    </Container>
  );
}

export default ImageItem;
