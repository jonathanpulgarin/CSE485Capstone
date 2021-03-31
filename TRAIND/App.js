import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginPage from './Pages/LoginPage'
import Home from './Pages/Home'
import TabBar from './navigation/TabBar'

export default function App() {
	return (
		<View style={styles.container}>
			<Home></Home>
			{/*<LoginPage></LoginPage>
			<TabBar></TabBar>*/}
			<TabBar></TabBar>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
