// @flow
import React from 'react';
import type { Element } from 'react';
import styled from 'styled-components';
import type { IntroMessageProps } from './types.js';

const Text = styled.p`
  font-size: 1rem;
  text-align: center;
  line-height: 1.5em;
  color: #606060;
`;

function IntroMessage({
  message = 'Start searching by typing a keyword in the search box.',
}: IntroMessageProps): Element<'p'> {
  return <Text>{message}</Text>;
}

export default IntroMessage;
