import { combineReducers } from 'redux';

// import loadingReducer from './loadingReducer';
import postsReducer from './postsReducer';
// import errorReducer from './errorReducer';
// import pageReducer from './pageReducer';
// import statsReducer from './statsReducer';

const rootReducer = combineReducers({
  //   isLoading: loadingReducer,
  posts: postsReducer,
  //   error: errorReducer,
  //   nextPage: pageReducer,
  //   imageStats: statsReducer,
});

export default rootReducer;
