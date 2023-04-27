import React, { useEffect, useMemo, useState } from 'react';

import { useNavigation, useRoute } from '@react-navigation/native';
import {
	TouchableOpacity,
	ActivityIndicator,
	Image,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import { shallowEqual, useSelector } from 'react-redux';

import { RootStateType } from '../../types/Store';
import { Back, Heart, HeartFilled, Rate, Screen } from '@/components';
import { Constants } from '@/constants';
import {
	getMovieCrew,
	getMovieDetail,
	toggleFavoriteMovie,
	useAppDispatch,
} from '@/state';
import { MovieDetailProps } from '@/types';
import { getFontFamily, isArrayIncludeKeyValue } from '@/utils';

export const MovieDetailScreen = () => {
	const navigation = useNavigation<MovieDetailProps['navigation']>();
	const route = useRoute<MovieDetailProps['route']>();

	const dispatch = useAppDispatch();
	const { favoriteMovies, movie, credits, loading } = useSelector(
		(state: RootStateType) => state.movie,
		shallowEqual,
	);

	const genres = useMemo(
		() => (movie?.genres ?? []).map(item => item.name).join(', '),
		[movie?.genres],
	);

	const creators = useMemo(
		() =>
			(movie?.production_companies ?? [])
				.map(item => item.name)
				.join(', '),
		[movie?.production_companies],
	);

	const starring = useMemo(
		() => (credits?.cast ?? []).map(item => item.name).join(', '),
		[movie?.genres],
	);

	const [isFavorite, setIsFavorite] = useState(false);

	const toggleFavorite = () => {
		dispatch(toggleFavoriteMovie(route.params.selectedMovie));
		setIsFavorite(p => !p);
	};

	const LeftComponent = () => (
		<TouchableOpacity onPress={navigation.goBack}>
			<Back />
		</TouchableOpacity>
	);

	const RightComponent = () => (
		<TouchableOpacity onPress={toggleFavorite}>
			{isFavorite ? <HeartFilled /> : <Heart />}
		</TouchableOpacity>
	);

	useEffect(() => {
		const param = {
			id: route.params.selectedMovie.id,
		};
		dispatch(getMovieDetail(param));
		dispatch(getMovieCrew(param));
		setIsFavorite(isArrayIncludeKeyValue(favoriteMovies, 'id', param.id));
	}, []);

	if (loading || !movie || !credits) {
		return <ActivityIndicator size='large' />;
	}

	return (
		<Screen
			leftComponent={<LeftComponent />}
			rightComponent={<RightComponent />}
			useScrollView={true}
		>
			<Image
				source={{
					uri: Constants.IMAGE_URL + movie.poster_path,
				}}
				style={styles.image}
			/>
			<Text style={styles.title}>{movie?.title}</Text>
			<Rate
				containerStyle={styles.rate}
				rate={Math.floor((movie?.vote_average ?? 0) / 2)}
			/>
			<View style={styles.informationContainer}>
				<Text>
					<Text style={styles.informationTitle}>Genre: </Text>
					{genres}
				</Text>
				<Text>
					<Text style={styles.informationTitle}>Creators: </Text>
					{creators}
				</Text>
				<Text>
					<Text style={styles.informationTitle}>Starring: </Text>
					{starring}
				</Text>
			</View>
			<View style={styles.descriptionContainer}>
				<Text style={styles.informationTitle}>Description</Text>
				<Text>{movie.overview}</Text>
			</View>
		</Screen>
	);
};

const styles = StyleSheet.create({
	image: {
		height: 252,
		resizeMode: 'cover',
		borderRadius: 12,
	},
	title: {
		fontSize: 22,
		fontFamily: getFontFamily(600),
		color: Constants.Colors.primaryText,
		marginTop: 20,
	},
	rate: {
		marginTop: 14,
	},
	informationContainer: {
		flex: 1,
		flexDirection: 'column',
		gap: 12,
		fontSize: 12,
		fontFamily: getFontFamily(400),
		color: Constants.Colors.primaryText,
		marginTop: 27,
	},
	informationTitle: {
		fontFamily: getFontFamily(700),
	},
	descriptionContainer: {
		flex: 1,
		flexDirection: 'column',
		gap: 12,
		fontSize: 14,
		fontFamily: getFontFamily(400),
		color: Constants.Colors.primaryText,
		marginVertical: 48,
	},
	descriptionTitle: {
		fontFamily: getFontFamily(600),
	},
});
