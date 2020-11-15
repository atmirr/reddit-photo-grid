// @flow
import React from 'react';
import type { Element } from 'react';
import styled from 'styled-components';
import type { ImageItemProp } from './types.js';

const Item = styled.div`
  padding: 1.5em 1.3em;
  text-align: center;
`;
const ImageWrapper = styled.div`
  display: flex;
  border: 1px solid #dbdbdb;
  border-radius: 2px;
  box-shadow: 0 0 6px 4px #e3e3e3;
  & img {
    border-radius: 2px;
  }
`;

function ImageItem({ title, thumbnail }: ImageItemProp): Element<'div'> {
  return (
    <Item>
      <ImageWrapper>
        <img src={thumbnail} alt={title} width={200} height={200} />
      </ImageWrapper>
    </Item>
  );
}

export default ImageItem;
