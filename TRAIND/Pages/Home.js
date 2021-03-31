import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PostScroll from '../components/PostScroll'
import {postList} from '../utils/testData1'

export default function Home() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <PostScroll list={postList.upcomingBookings} title={"Upcoming Bookings"}></PostScroll>
                <PostScroll list={postList.saved} title={"Saved"}></PostScroll>
                <PostScroll list={postList.yoga} title={"Yoga"}></PostScroll>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 100,
        paddingBottom: 100,
    }
});
