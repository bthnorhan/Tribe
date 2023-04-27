import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

import { Constants } from '@/constants';
import { getFontFamily } from '@/utils';

interface NavigationBarProps {
	title?: string;
	leftComponent?: JSX.Element;
	rightComponent?: JSX.Element;
}

export const NavigationBar = ({
	title,
	leftComponent,
	rightComponent,
}: NavigationBarProps) => {
	return (
		<View style={styles.container}>
			<View style={styles.leftContainer}>
				{!!leftComponent && leftComponent}
				<Text style={styles.title}>{title}</Text>
			</View>
			<View style={styles.rightContainer}>
				{!!rightComponent && rightComponent}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		height: 74,
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 20,
		paddingVertical: 18,
	},
	leftContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		gap: 16,
	},
	rightContainer: {
		flex: 1,
		maxWidth: 165,
		alignItems: 'flex-end',
	},
	title: {
		fontFamily: getFontFamily(600),
		fontSize: 22,
		color: Constants.Colors.primaryText,
	},
});
