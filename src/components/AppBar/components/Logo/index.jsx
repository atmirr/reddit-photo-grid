// @flow
import React from 'react';
import styled from 'styled-components';
import type { Element } from 'react';
import RedditLogo from '@assets/svgs/reddit-logo.svg';
import type { LogoProps } from './types.js';

const Wrapper = styled.div`
  display: flex;
  flex: 0 0 auto;
`;

const Image = styled.img`
  height: ${({ compact }) => (compact ? '50px' : '70px')};
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

function Logo({ compact }: LogoProps): Element<'div'> {
  return (
    <Wrapper>
      <Image compact={compact} src={RedditLogo} alt="Reddit logo" />
    </Wrapper>
  );
}

export default Logo;
