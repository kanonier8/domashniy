import { combineReducers } from 'redux';
import { navReducer } from './nav';
import { seasonsReducer } from './seasons';
import { seriesReducer } from './series';
import { videoReducer } from './video';

export const rootReducer = combineReducers({
  nav: navReducer,
  seasons: seasonsReducer,
  series: seriesReducer,
  video: videoReducer
});