// @flow
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import type { Element } from 'react';
import { debounce } from 'lodash';
import AppBar from '@components/AppBar';
import SearchResult from '@components/SearchResult';
import configureStore from './store';

function App(): Element<typeof Provider> {
  const store = configureStore();
  const [keyword, setKeyword] = useState();
  const debouncedSetKeyword = debounce(setKeyword, 500);
  const handleKeywordChange = (e) => {
    const query = e.target.value;
    debouncedSetKeyword(query);
  };
  return (
    <Provider store={store}>
      <AppBar handleKeywordChange={handleKeywordChange} />
      <SearchResult keyword={keyword} />
    </Provider>
  );
}

export default App;
