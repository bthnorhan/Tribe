import React, { memo } from 'react';

import { StyleSheet, View } from 'react-native';

import { Star, StarFilled } from '../svg-components';

interface RateProps {
	rate?: number;
}

export const Rate = memo(({ rate = 0 }: RateProps) => {
	return (
		<View style={styles.container}>
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
