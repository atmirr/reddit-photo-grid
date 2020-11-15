import React from 'react';
import { Provider } from 'react-redux';
import Fetch from './Fetch';

import configureStore from './store';

function App() {
  const store = configureStore();
  return (
    <Provider store={store}>
      <Fetch />
    </Provider>
  );
}

export default App;
