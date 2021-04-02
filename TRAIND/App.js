import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginPage from './Pages/LoginPage'
import HomeScreen from './Pages/HomeScreen'
import TabBar from './navigation/TabBar'

export default function App() {
	return (
		<View style={styles.container}>
			<HomeScreen></HomeScreen>
			<TabBar></TabBar>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
