// @flow
import React, { Fragment } from 'react';
import type { Element } from 'react';
import styled, { keyframes } from 'styled-components';
// import type { LoadingIndicatorProps } from './types.js';

const scaleUp = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;
const scaleDown = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;
const translate = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0.3em 0.6em;
  border: 1px solid rgb(130, 130, 130, 0.2);
  background-color: rgb(130, 130, 130, 0.4);
  border-radius: 10px;
`;

const Label = styled.span`
  font-size: 1.1em;
  color: #ffffff;
`;

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 40px;
  & div:nth-child(1) {
    left: 8px;
    animation: ${scaleUp} 0.6s infinite;
  }
  & div:nth-child(2) {
    left: 8px;
    animation: ${translate} 0.6s infinite;
  }
  & div:nth-child(3) {
    left: 32px;
    animation: ${translate} 0.6s infinite;
  }
  & div:nth-child(4) {
    left: 56px;
    animation: ${scaleDown} 0.6s infinite;
  }
`;

const Item = styled.div`
  position: absolute;
  top: 14px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #ffffff;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
`;

function LoadingIndicator(): Element<typeof Fragment> {
  return (
    <Container>
      <Label>Loading</Label>
      <Wrapper>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
      </Wrapper>
    </Container>
  );
}

export default LoadingIndicator;
