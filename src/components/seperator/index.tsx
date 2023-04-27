import React from 'react';

import { StyleSheet, View } from 'react-native';

import { Constants } from '@/constants';

export const Seperator = () => {
	return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 2,
		backgroundColor: Constants.Colors.componentBackground,
	},
});
