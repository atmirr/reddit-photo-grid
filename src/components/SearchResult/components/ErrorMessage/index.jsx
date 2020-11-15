// @flow
import React from 'react';
import type { Element } from 'react';
import styled from 'styled-components';
import type { ErrorMessageProps } from './types.js';

const ErrorText = styled.p`
  font-size: 1rem;
  text-align: center;
  line-height: 1.5em;
  color: #d43b3b;
`;

function ErrorMessage({ message }: ErrorMessageProps): Element<'div'> {
  return <ErrorText>{message}</ErrorText>;
}

export default ErrorMessage;
