import { createSlice, isFulfilled } from '@reduxjs/toolkit';

import {
	discoverMovies,
	getMovieCrew,
	getMovieDetail,
	searchMovie,
} from './Thunk';
import type {
	PaginationType,
	MovieType,
	MovieDetailType,
	MovieCreditsType,
} from '@/types';
import { isPendingAction, isRejectedAction } from '@/utils';

export interface MovieState {
	movies: Array<MovieType>;
	movie: MovieDetailType | undefined;
	credits: MovieCreditsType | undefined;
	favoriteMovies: Array<MovieType>;
	pagination: PaginationType | undefined;
	loading: boolean;
	error: boolean;
}

const initialState: MovieState = {
	movies: [],
	movie: undefined,
	credits: undefined,
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
			state.movie = undefined;
			state.credits = undefined;
			state.pagination = undefined;
			state.loading = false;
			state.error = false;
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
			.addCase(getMovieDetail.fulfilled, (state, action) => {
				state.movie = action.payload;
			})
			.addCase(getMovieCrew.fulfilled, (state, action) => {
				state.credits = action.payload;
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
