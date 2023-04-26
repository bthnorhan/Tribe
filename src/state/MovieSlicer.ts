import { createSlice } from '@reduxjs/toolkit';

import type { PaginationType, MovieType } from '@/types';

export interface MovieState {
	movies: Array<MovieType>;
	favoriteMovies: Array<MovieType>;
	pagination: PaginationType | undefined;
}

const initialState: MovieState = {
	movies: [],
	favoriteMovies: [],
	pagination: undefined,
};

export const movieSlice = createSlice({
	name: 'movie',
	initialState,
	reducers: {
		clearMovieSlice: state => {
			state.movies = [];
			state.favoriteMovies = [];
			state.pagination = undefined;
		},
	},
});

export const { clearMovieSlice } = movieSlice.actions;

export default movieSlice.reducer;
