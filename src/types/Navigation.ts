import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
	MovieList: undefined;
	FavoriteMovies: undefined;
	MovieDetail: { id: number };
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
