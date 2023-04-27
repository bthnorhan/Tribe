import React, { memo } from 'react';

import { StyleSheet, View, ViewStyle } from 'react-native';

import { Star, StarFilled } from '../svg-components';

interface RateProps {
	rate?: number;
	containerStyle?: ViewStyle;
}

export const Rate = memo(({ rate = 0, containerStyle }: RateProps) => {
	return (
		<View style={StyleSheet.flatten([styles.container, containerStyle])}>
			{Array.from(new Array(5)).map((_, index) =>
				index + 1 <= rate ? (
					<StarFilled key={index} />
				) : (
					<Star key={index} />
				),
			)}
		</View>
	);
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
	},
});
