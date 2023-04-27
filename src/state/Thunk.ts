import { createAsyncThunk } from '@reduxjs/toolkit';

import api from '@/api';
import { Constants } from '@/constants';
import { MovieDataType, MovieRequestParamType, PaginationType } from '@/types';

export const discoverMovies = createAsyncThunk<
	MovieDataType & PaginationType,
	MovieRequestParamType
>(
	'movies/discover',
	async ({ page = 1, sort = 'popularity' }: MovieRequestParamType) => {
		const response = await api.get<MovieDataType & PaginationType>(
			'discover/movie',
			{
				params: {
					api_key: Constants.API_KEY,
					language: 'en-US',
					sort_by: sort,
					include_adult: false,
					include_video: false,
					with_watch_monetization_types: 'flatrate',
					'vote_count.gte': 1,
					page,
				},
			},
		);

		return response.data;
	},
);

export const searchMovie = createAsyncThunk<
	MovieDataType & PaginationType,
	MovieRequestParamType
>('movies/search', async ({ page = 1, query }: MovieRequestParamType) => {
	const response = await api.get<MovieDataType & PaginationType>(
		'/search/movie',
		{
			params: {
				api_key: Constants.API_KEY,
				language: 'en-US',
				query,
				include_adult: false,
				page,
			},
		},
	);

	return response.data;
});
