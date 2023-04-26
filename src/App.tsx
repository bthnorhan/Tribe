import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import { MovieListScreen } from '@/screens';
import { Store } from '@/state';

const Stack = createNativeStackNavigator();

const App = (): JSX.Element => {
	return (
		<SafeAreaView
			edges={['bottom', 'left', 'top', 'right']}
			style={styles.container}
		>
			<Provider store={Store}>
				<NavigationContainer>
					<Stack.Navigator
						screenOptions={{
							headerShown: false,
						}}
						initialRouteName='MovieList'
					>
						<Stack.Screen
							name='MovieList'
							component={MovieListScreen}
						/>
					</Stack.Navigator>
				</NavigationContainer>
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
