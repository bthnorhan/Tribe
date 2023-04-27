import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { ShortMovieType } from './Movie';

export type RootStackParamList = {
	MovieList: undefined;
	FavoriteMovies: undefined;
	MovieDetail: { selectedMovie: ShortMovieType };
};

export type MovieListProps = NativeStackScreenProps<
	RootStackParamList,
	'MovieList'
>;

export type FavoriteMoviesProps = NativeStackScreenProps<
	RootStackParamList,
	'FavoriteMovies'
>;

export type MovieDetailProps = NativeStackScreenProps<
	RootStackParamList,
	'MovieDetail'
>;
