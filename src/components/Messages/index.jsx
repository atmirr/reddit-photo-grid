// @flow
import React from 'react';
import type { Element } from 'react';
import styled from 'styled-components';
import LoadingIndicator from './components/LoadingIndicator';
import type { MessagesProps } from './types.js';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${({ fullscreen }) => (fullscreen ? '75vh' : 'auto')};
  padding: 0 15px;
`;

const Text = styled.p`
  font-size: 1rem;
  text-align: center;
  line-height: 1.5em;
  color: #606060;
`;

const ErrorText = styled(Text)`
  color: #d43b3b;
`;

function Messages({
  welcomeMessage = 'Start searching by typing a keyword in the search box.',
  hideWelcomeMessage,
  hideErrorMessage,
  isLoading,
  errorMessage,
}: MessagesProps): Element<'div'> {
  return (
    <Wrapper fullscreen={!hideWelcomeMessage}>
      {!hideWelcomeMessage && <Text>{welcomeMessage}</Text>}
      {isLoading && <LoadingIndicator />}
      {!hideErrorMessage && errorMessage && (
        <ErrorText>{errorMessage}</ErrorText>
      )}
    </Wrapper>
  );
}

export default Messages;
