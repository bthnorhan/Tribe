import React from 'react';

import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Rate } from '../rate';
import { Constants } from '@/constants';
import { MovieType } from '@/types';
import { getFontFamily } from '@/utils';

interface MovieListItemProps {
	movie: MovieType;
	onPress: (movie: MovieType) => void;
}

export const MovieListItem = ({ movie, onPress }: MovieListItemProps) => {
	const onPressHandler = () => {
		onPress && onPress(movie);
	};

	return (
		<TouchableOpacity
			onPress={onPressHandler}
			activeOpacity={0.7}
			style={styles.container}
		>
			<Image
				source={{ uri: Constants.IMAGE_URL + movie.poster_path }}
				style={styles.image}
			/>
			<View style={styles.rightContainer}>
				<View style={styles.textContainer}>
					<Text style={styles.title}>{movie.title}</Text>
					<Text
						style={styles.description}
						numberOfLines={4}
						ellipsizeMode='tail'
					>
						{movie.overview}
					</Text>
				</View>
				<Rate rate={Math.floor(movie.vote_average / 2)} />
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		marginVertical: 16,
		gap: 16,
	},
	rightContainer: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-between',
	},
	textContainer: {
		flex: 1,
		flexDirection: 'column',
		gap: 12,
	},
	title: {
		color: Constants.Colors.primaryText,
		fontFamily: getFontFamily(400),
		fontSize: 14,
	},
	description: {
		color: Constants.Colors.secondaryText,
		fontFamily: getFontFamily(400),
		fontSize: 12,
	},
	image: {
		width: 100,
		height: 143,
		borderRadius: 12,
	},
});
