import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import favoritesReducer from './favoritesReducer';

const rootReducer = combineReducers({
    movie: movieReducer,
    favorite: favoritesReducer
})
export default rootReducer;