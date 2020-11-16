// @flow
import React, { useEffect, useCallback, Fragment } from 'react';
import type { Element } from 'react';
import styled from 'styled-components';
import { isEmpty } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import usePageBottom from '@utils/use-page-bottom';
import { loadPosts } from '@actions/posts';
import { getPosts, getError, getIsLoading } from '@selectors/posts';
import ImagesGrid from './components/ImagesGrid';
import IntroMessage from './components/IntroMessage';
import ErrorMessage from './components/ErrorMessage';
import LoadingIndicator from './components/LoadingIndicator';
import type { SearchResultProps } from './types.js';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${({ fullscreen }) => (fullscreen ? '75vh' : 'auto')};
  padding: 0 15px 35px 15px;
`;

function SearchResult({
  keyword,
}: SearchResultProps): Element<typeof Fragment> {
  const dispatch = useDispatch();
  const posts = useSelector(getPosts(keyword));
  const errorMessage = useSelector(getError());
  const isLoading = useSelector(getIsLoading());
  const isPageBottom = usePageBottom();
  const hasKeyword = Boolean(keyword);
  const fullscreen = !hasKeyword || isEmpty(posts);
  const handleLoadPosts = useCallback(
    (query) => {
      if (query) {
        dispatch(loadPosts(query));
      }
    },
    [dispatch],
  );

  useEffect(() => {
    if (isEmpty(posts)) {
      handleLoadPosts(keyword);
    }
  }, [keyword, posts, handleLoadPosts]);

  useEffect(() => {
    if (hasKeyword && isPageBottom) {
      handleLoadPosts(keyword);
    }
  }, [isPageBottom, hasKeyword, keyword, handleLoadPosts]);
  return (
    <>
      <ImagesGrid posts={posts} />
      <Wrapper fullscreen={fullscreen}>
        {!hasKeyword && <IntroMessage />}
        {hasKeyword && errorMessage && <ErrorMessage message={errorMessage} />}
        {isLoading && <LoadingIndicator />}
      </Wrapper>
    </>
  );
}

export default SearchResult;
