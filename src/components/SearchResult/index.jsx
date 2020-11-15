// @flow
import React, { useEffect, useCallback } from 'react';
import type { Element } from 'react';
import { isEmpty } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import usePageBottom from '@utils/use-page-bottom';
import { loadPosts } from '@actions/posts';
import { getPosts } from '@selectors/posts';
import ImagesGrid from './components/ImagesGrid';
import type { SearchResultProps } from './types.js';

function SearchResult({
  keyword,
}: SearchResultProps): Element<typeof ImagesGrid> {
  const dispatch = useDispatch();
  const posts = useSelector(getPosts(keyword));
  const isPageBottom = usePageBottom({
    bottomOffset: 10,
  });
  const hasKeyword = Boolean(keyword);
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
  return <ImagesGrid posts={posts} />;
}

export default SearchResult;
