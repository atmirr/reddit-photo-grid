// @flow
import React, { Fragment } from 'react';
import type { Element } from 'react';
import styled from 'styled-components';
import usePageTop from '@utils/use-page-top';
import Logo from './components/Logo';
import SearchBox from './components/SearchBox';
import type { AppBarProps } from './types.js';

const HEADER_BOX_SHADOW =
  '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)';

const Header = styled.div`
  width: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  z-index: 999;
  box-sizing: border-box;
  background-color: #ff4500;
  border-bottom: ${({ compact }) => (compact ? 'none' : '1px solid #f34100')};
  padding: 10px 25px;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  height: ${({ compact }) => (compact ? '70px' : '100px')};
  box-shadow: ${({ compact }) => (compact ? HEADER_BOX_SHADOW : 'none')};
`;

const SearchWrapper = styled.div`
  display: flex;
  flex-grow: 1;
`;

const Gutter = styled.div`
  min-height: 100px;
`;

function AppBar({
  handleKeywordChange,
}: AppBarProps): Element<typeof Fragment> {
  const isPageTop = usePageTop(30);
  const compact = !isPageTop;
  return (
    <>
      <Header compact={compact}>
        <Logo compact={compact} />
        <SearchWrapper>
          <SearchBox compact={compact} handleChange={handleKeywordChange} />
        </SearchWrapper>
      </Header>
      <Gutter />
    </>
  );
}

export default AppBar;
