// @flow
import React, { Fragment, useState } from 'react';
import type { Element } from 'react';
import { debounce } from 'lodash';
import { useSelector } from 'react-redux';
import { getError, getIsLoading } from '@selectors/posts';
import AppBar from '@components/AppBar';
import SearchResult from '@components/SearchResult';

function Fetch(): Element<typeof Fragment> {
  const [keyword, setKeyword] = useState();
  const debouncedSetKeyword = debounce(setKeyword, 500);
  const errorMessage = useSelector(getError());
  const isLoading = useSelector(getIsLoading());
  const handleKeywordChange = (e) => {
    const query = e.target.value;
    debouncedSetKeyword(query);
  };
  return (
    <>
      <AppBar handleKeywordChange={handleKeywordChange} />
      <SearchResult
        keyword={keyword}
        errorMessage={errorMessage}
        isLoading={isLoading}
      />
    </>
  );
}

export default Fetch;
