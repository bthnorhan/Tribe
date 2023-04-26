import { configureStore } from '@reduxjs/toolkit';

import MovieReducer from './MovieSlicer';

export const Store = configureStore({
	reducer: {
		movie: MovieReducer,
	},
});
