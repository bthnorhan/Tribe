import React from 'react';

import {
	StyleSheet,
	TextInput,
	TextInputProps,
	View,
	ViewStyle,
} from 'react-native';

import { Constants } from '@/constants';

interface InputProps extends TextInputProps {
	placeholder?: string;
	leftIcon?: JSX.Element;
	containerStyle?: ViewStyle;
}

export const Input = ({
	placeholder,
	leftIcon,
	containerStyle = {},
	value = '',
	onChangeText,
}: InputProps) => {
	return (
		<View style={StyleSheet.flatten([styles.container, containerStyle])}>
			{!!leftIcon && leftIcon}
			<TextInput
				style={styles.input}
				placeholder={placeholder}
				placeholderTextColor={Constants.Colors.placeholderColor}
				value={value}
				onChangeText={onChangeText}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		width: '100%',
		height: 44,
		gap: 6,
		backgroundColor: Constants.Colors.componentBackground,
		borderRadius: 12,
		alignItems: 'center',
		paddingHorizontal: 8,
	},
	input: {
		flex: 1,
		fontSize: 12,
	},
});
