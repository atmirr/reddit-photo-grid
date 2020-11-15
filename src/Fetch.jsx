// @flow
import React, { Fragment, useState } from 'react';
import type { Element } from 'react';
import { debounce } from 'lodash';
import AppBar from '@components/AppBar';
import SearchResult from '@components/SearchResult';

function Fetch(): Element<typeof Fragment> {
  const [keyword, setKeyword] = useState();
  const debouncedSetKeyword = debounce(setKeyword, 500);
  const handleKeywordChange = (e) => {
    const query = e.target.value;
    debouncedSetKeyword(query);
  };
  return (
    <>
      <AppBar handleKeywordChange={handleKeywordChange} />
      <SearchResult keyword={keyword} />
    </>
  );
}

export default Fetch;
