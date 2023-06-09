import React, { useEffect, useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import { shallowEqual, useSelector } from 'react-redux';

import {
	Button,
	Heart,
	Input,
	MagnifyingGlass,
	MovieListItem,
	Screen,
	Seperator,
	Sort,
	Spark,
} from '@/components';
import { useDebounce } from '@/hooks';
import {
	clearMovieSlice,
	discoverMovies,
	searchMovie,
	useAppDispatch,
} from '@/state';
import {
	MovieListProps,
	MovieSortType,
	RootStateType,
	ShortMovieType,
} from '@/types';

export const MovieListScreen = () => {
	const navigation = useNavigation<MovieListProps['navigation']>();

	const dispatch = useAppDispatch();
	const { movies, pagination, loading } = useSelector(
		(state: RootStateType) => state.movie,
		shallowEqual,
	);

	const [selectedSort, setSelectedSort] = useState(MovieSortType.POPULARITY);
	const [query, setQuery] = useState('');
	const debouncedQuery = useDebounce(query);

	useEffect(() => {
		dispatch(clearMovieSlice());

		dispatch(
			debouncedQuery.trim().length > 0
				? searchMovie({ query: debouncedQuery })
				: discoverMovies({ sort: selectedSort }),
		);
	}, [selectedSort, debouncedQuery]);

	const navigateFavorites = () => {
		navigation.navigate('FavoriteMovies');
	};

	const nextPage = () => {
		if (
			pagination &&
			pagination.page < pagination.total_pages &&
			!loading
		) {
			if (debouncedQuery.trim().length > 0) {
				dispatch(
					searchMovie({
						page: pagination.page + 1,
						query: debouncedQuery,
					}),
				);
			} else {
				dispatch(
					discoverMovies({
						page: pagination.page + 1,
						sort: selectedSort,
					}),
				);
			}
		}
	};

	const sort = (sortType: MovieSortType) => () => {
		setSelectedSort(sortType);
	};

	const onMovieClick = (movie: ShortMovieType) => {
		navigation.navigate('MovieDetail', {
			selectedMovie: movie,
		});
	};

	return (
		<Screen
			title='Movie List'
			rightComponent={
				<Button
					onPress={navigateFavorites}
					title='Favorite Movies'
					leftIcon={<Heart />}
				/>
			}
		>
			<Input
				placeholder='Search'
				leftIcon={<MagnifyingGlass />}
				value={query}
				onChangeText={setQuery}
			/>
			{debouncedQuery.trim().length > 0 ? null : (
				<>
					<View style={styles.buttonContainer}>
						<Button
							title='Sort by Popularity'
							leftIcon={<Sort />}
							onPress={sort(MovieSortType.POPULARITY)}
						/>
						<Button
							title='Sort by Rating'
							leftIcon={<Spark />}
							onPress={sort(MovieSortType.VOTE)}
						/>
					</View>
				</>
			)}
			<FlatList
				data={movies}
				keyExtractor={item => item.id.toString()}
				renderItem={({ item }) => (
					<MovieListItem onPress={onMovieClick} movie={item} />
				)}
				showsVerticalScrollIndicator={false}
				ItemSeparatorComponent={Seperator}
				onEndReachedThreshold={0.2}
				onEndReached={nextPage}
				ListFooterComponent={
					loading ? <ActivityIndicator size='large' /> : null
				}
			/>
		</Screen>
	);
};

const styles = StyleSheet.create({
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 20,
		marginBottom: 12,
		gap: 20,
	},
});
