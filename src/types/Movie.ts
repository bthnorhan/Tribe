export type MovieType = {
	adult: boolean;
	backdrop_path: string | null;
	genre_ids: Array<number>;
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string | null;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
};

export type GenreType = {
	id: number;
	name: string;
};

export type ProductCompanyType = {
	name: string;
	id: number;
	logo_path: string | null;
	origin_country: string;
};

export type ProductCountryType = {
	iso_3166_1: string;
	name: string;
};

export type SpokenLanguageType = {
	iso_639_1: string;
	name: string;
};

export type MovieDetailType = {
	adult: boolean;
	backdrop_path: string | null;
	budget: number;
	genres: Array<GenreType>;
	homepage: string | null;
	id: number;
	imdb_id: string | null;
	original_language: string;
	original_title: string;
	overview: string | null;
	popularity: number;
	poster_path: string | null;
	production_companies: Array<ProductCompanyType>;
	production_countries: Array<ProductCountryType>;
	release_date: string;
	revenue: number;
	runtime: number | null;
	spoken_languages: Array<SpokenLanguageType>;
	status:
		| 'Rumored'
		| 'Planned'
		| 'In Production'
		| 'Post Production'
		| 'Released'
		| 'Canceled';
	tagline: string | null;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
};

export type MovieDataType = {
	results: Array<MovieType>;
};

export enum MovieSortType {
	POPULARITY = 'popularity',
	VOTE = 'vote_average',
}

export type MovieRequestParamType = {
	page?: number;
	sort?: string;
	query?: string;
	id?: number;
};

export type MovieCastType = {
	adult: boolean;
	gender: number | null;
	id: number;
	known_for_department: string;
	name: string;
	original_name: string;
	popularity: number;
	profile_path: string | null;
	cast_id: number;
	character: string;
	credit_id: string;
	order: number;
};

export type MovieCrewType = {
	adult: boolean;
	gender: number | null;
	id: number;
	known_for_department: string;
	name: string;
	original_name: string;
	popularity: number;
	profile_path: string | null;
	credit_id: string;
	department: string;
	job: string;
};

export type MovieCreditsType = {
	id: number;
	cast: Array<MovieCastType>;
	crew: Array<MovieCrewType>;
};

export type ShortMovieType = {
	id: number;
	overview: string;
	poster_path: string | null;
	title: string;
	vote_average: number;
};
