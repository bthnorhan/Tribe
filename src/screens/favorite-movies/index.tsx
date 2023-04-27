import React, { useMemo, useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import _ from 'lodash';
import {
	FlatList,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { shallowEqual, useSelector } from 'react-redux';

import {
	Back,
	Button,
	Input,
	MagnifyingGlass,
	MovieListItem,
	Screen,
	Seperator,
	Sort,
	Spark,
} from '@/components';
import { Constants } from '@/constants';
import { useDebounce } from '@/hooks';
import {
	MovieListProps,
	MovieSortType,
	RootStateType,
	ShortMovieType,
} from '@/types';
import { getFontFamily } from '@/utils';

export const FavoriteMoviesScreen = () => {
	const navigation = useNavigation<MovieListProps['navigation']>();

	const { favoriteMovies } = useSelector(
		(state: RootStateType) => state.movie,
		shallowEqual,
	);

	const [selectedSort, setSelectedSort] = useState(MovieSortType.POPULARITY);
	const [query, setQuery] = useState('');
	const debouncedQuery = useDebounce(query);

	const filteredFavoriteMovies = useMemo(
		() =>
			_.orderBy(
				_.filter(favoriteMovies, o => o.title.includes(debouncedQuery)),
				[selectedSort],
				['desc'],
			),
		[selectedSort, debouncedQuery, favoriteMovies],
	);

	const LeftComponent = () => (
		<TouchableOpacity onPress={navigation.goBack}>
			<Back />
		</TouchableOpacity>
	);

	const sort = (sortType: MovieSortType) => () => {
		setSelectedSort(sortType);
	};

	const onMovieClick = (movie: ShortMovieType) => {
		navigation.navigate('MovieDetail', {
			selectedMovie: movie,
		});
	};

	return (
		<Screen leftComponent={<LeftComponent />}>
			<Text style={styles.title}>Favorite Movies</Text>
			{filteredFavoriteMovies.length > 0 ? (
				<>
					<Input
						placeholder='Search'
						leftIcon={<MagnifyingGlass />}
						value={query}
						onChangeText={setQuery}
					/>
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
					<FlatList
						data={filteredFavoriteMovies}
						keyExtractor={item => item.id.toString()}
						renderItem={({ item }) => (
							<MovieListItem
								onPress={onMovieClick}
								movie={item}
							/>
						)}
						showsVerticalScrollIndicator={false}
						ItemSeparatorComponent={Seperator}
						onEndReachedThreshold={0.2}
					/>
				</>
			) : (
				<View style={styles.emptyContainer}>
					<Text style={styles.emptyText}>
						There are no movies in favorites yet.
					</Text>
					<Text style={styles.emptySubText}>
						To favorite a movie, go to my movie detail and tap the
						heart.
					</Text>
				</View>
			)}
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
	title: {
		fontFamily: getFontFamily(600),
		fontSize: 22,
		color: Constants.Colors.primaryText,
		marginBottom: 17,
	},
	emptyContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		gap: 12,
	},
	emptyText: {
		fontFamily: getFontFamily(400),
		fontSize: 14,
		color: Constants.Colors.primaryText,
	},
	emptySubText: {
		fontFamily: getFontFamily(400),
		fontSize: 12,
		color: Constants.Colors.secondaryText,
	},
});
