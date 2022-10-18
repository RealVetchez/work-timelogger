import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import React from 'react';

import CurrentInvoice from './screens/CurrentInvoice';
import ManageInvoices from './screens/ManageInvoices';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const Overview = () => {
	return (
		<BottomTabs.Navigator
			screenOptions={{
				headerTintColor: 'white',
			}}
		>
			<BottomTabs.Screen
				name="CurrentInvoice"
				component={CurrentInvoice}
				options={{
					title: 'Current Invoice',
					tabBarLabel: 'Current',
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="hourglass" size={size} color={color} />
					),
				}}
			/>
			<BottomTabs.Screen
				name="ManageInvoices"
				component={ManageInvoices}
				options={{
					title: 'Current Invoice',
					tabBarLabel: 'Current',
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="hourglass" size={size} color={color} />
					),
				}}
			/>
		</BottomTabs.Navigator>
	);
};

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			fontsLoaded: false,
		};
	}

	async loadFonts() {
		await Font.loadAsync({
			Roboto: require('./assets/fonts/Roboto-Regular.ttf'),
		});
		this.setState({ fontsLoaded: true });
	}

	componentDidMount() {
		this.loadFonts();
	}
	render() {
		return (
			<>
				<StatusBar style="auto" />
				<NavigationContainer>
					<Stack.Navigator>
						<Stack.Screen
							name="Overview"
							component={Overview}
							options={{ headerShown: false }}
						/>
						<Stack.Screen name="ManageInvoice" component={ManageInvoices} />
					</Stack.Navigator>
				</NavigationContainer>
			</>
		);
	}
}
