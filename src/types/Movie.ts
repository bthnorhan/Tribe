import { PaginationType } from '.';

export type MovieType = {
	adult: boolean;
	backdrop_path: string;
	genre_ids: Array<number>;
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
};

export type MovieDataType = {
	results: Array<MovieType>;
};

export type MovieResponseType = {
	data: (MovieDataType & PaginationType) | undefined;
};
