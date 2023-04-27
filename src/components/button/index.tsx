import React from 'react';

import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { Constants } from '@/constants';
import { getFontFamily } from '@/utils';

interface ButtonProps {
	title?: string;
	leftIcon?: JSX.Element;
	onPress?: () => void;
}

export const Button = ({ title, leftIcon, onPress }: ButtonProps) => {
	const buttonPressHandler = () => {
		!!onPress && onPress();
	};

	return (
		<TouchableOpacity style={styles.container} onPress={buttonPressHandler}>
			{!!leftIcon && leftIcon}
			<Text style={styles.title}>{title}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		minWidth: 165,
		height: 38,
		borderRadius: 12,
		backgroundColor: Constants.Colors.componentBackground,
		paddingHorizontal: 13,
		paddingVertical: 10,
		flexDirection: 'row',
		gap: 13,
	},
	title: {
		fontFamily: getFontFamily(500),
		color: Constants.Colors.primaryText,
		fontSize: 12,
	},
});
