import { createSlice, isFulfilled } from '@reduxjs/toolkit';

import { discoverMovies, searchMovie } from './Thunk';
import type { PaginationType, MovieType } from '@/types';
import { isPendingAction, isRejectedAction } from '@/utils';

export interface MovieState {
	movies: Array<MovieType>;
	favoriteMovies: Array<MovieType>;
	pagination: PaginationType | undefined;
	loading: boolean;
	error: boolean;
}

const initialState: MovieState = {
	movies: [],
	favoriteMovies: [],
	pagination: undefined,
	loading: false,
	error: false,
};

export const movieSlice = createSlice({
	name: 'movie',
	initialState,
	reducers: {
		clearMovieSlice: state => {
			state.movies = [];
			state.pagination = undefined;
		},
	},
	extraReducers: builder => {
		builder
			.addCase(discoverMovies.fulfilled, (state, action) => {
				const { results, ...pagination } = action.payload;
				state.movies.push(...results);
				state.pagination = pagination;
			})
			.addCase(searchMovie.fulfilled, (state, action) => {
				const { results, ...pagination } = action.payload;
				state.movies.push(...results);
				state.pagination = pagination;
			})
			.addMatcher(isPendingAction, state => {
				state.loading = true;
				state.error = false;
			})
			.addMatcher(isFulfilled, state => {
				state.loading = false;
				state.error = false;
			})
			.addMatcher(isRejectedAction, state => {
				state.loading = false;
				state.error = true;
			});
	},
});

export const { clearMovieSlice } = movieSlice.actions;

export default movieSlice.reducer;
