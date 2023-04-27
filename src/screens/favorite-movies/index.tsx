import React from 'react';

import { StyleSheet, View } from 'react-native';

import { NavigationBar } from '@/components';
import { Constants } from '@/constants';

export const FavoriteMoviesScreen = () => {
	return (
		<View style={styles.container}>
			<NavigationBar title='Favorite Movies List' />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: Constants.Colors.white,
	},
});
