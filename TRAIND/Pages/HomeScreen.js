import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeFeed from './HomeFeed'
import Messages from './Messages'

const Stack = createStackNavigator();

export default function HomeScreen() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeFeed}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Messages"
                    component={Messages}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
