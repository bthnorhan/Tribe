import React, { PropsWithChildren, ReactElement, useMemo } from 'react';

import {
	Platform,
	ScrollView,
	StyleSheet,
	View,
	ViewStyle,
} from 'react-native';

import { NavigationBar } from '@/components';
import { Constants } from '@/constants';

interface ScreenProps extends PropsWithChildren {
	title?: string;
	rightComponent?: JSX.Element | ReactElement;
	leftComponent?: JSX.Element | ReactElement;
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

	const extraStyle = useMemo(
		() => ({ paddingTop: Platform.OS === 'ios' ? 20 : 0 }),
		[Platform.OS],
	) as ViewStyle;

	return (
		<View style={StyleSheet.create([styles.container, extraStyle])}>
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
