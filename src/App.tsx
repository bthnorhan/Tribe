import React from 'react';

import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import { Store } from '@/redux';

const App = (): JSX.Element => {
	return (
		<SafeAreaView
			edges={['bottom', 'left', 'top', 'right']}
			style={styles.container}
		>
			<Provider store={Store}>
				<View></View>
			</Provider>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexGrow: 1,
		flexWrap: 'nowrap',
	},
});

export default App;
