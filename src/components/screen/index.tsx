import React, { PropsWithChildren, useMemo } from 'react';

import { ScrollView, StyleSheet, View } from 'react-native';

import { NavigationBar } from '@/components';
import { Constants } from '@/constants';

interface ScreenProps extends PropsWithChildren {
	title?: string;
	rightComponent?: JSX.Element;
	leftComponent?: JSX.Element;
	useScrollView?: boolean;
}

export const Screen = ({
	children,
	title,
	rightComponent,
	leftComponent,
	useScrollView = false,
}: ScreenProps) => {
	const Wrapper = useMemo(
		() => (useScrollView ? ScrollView : View),
		[useScrollView],
	);

	return (
		<View style={styles.container}>
			<NavigationBar
				title={title}
				rightComponent={rightComponent}
				leftComponent={leftComponent}
			/>
			<Wrapper style={styles.dataContainer}>{children}</Wrapper>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: Constants.Colors.white,
	},
	dataContainer: {
		flex: 1,
		flexDirection: 'column',
		paddingHorizontal: 20,
	},
});
