import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';

export default function HomeScreen() {
    return (
        <ScrollView style={styles.container}>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 400,
        backgroundColor: 'red'
    }
});
