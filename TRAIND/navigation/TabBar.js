import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Dimensions
} from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import { BlurView } from 'expo-blur';


const { width: WIDTH } = Dimensions.get('window')

export default function TabBar() {
  return (
    <View style={styles.main} intensity={100}>
        <View style={styles.tabButton}>
            <Ionicons name={'home'} size={24} color={'#F15A24'} />
            <Text style={{color: '#F15A24'}}>Home</Text>
        </View>
        <View style={styles.tabButton}>
            <Ionicons name={'search'} size={24} color={'#FFFFFF'} />
            <Text style={{color: 'white'}}>Search</Text>
        </View>
        <View style={styles.tabButton}>
            <Ionicons name={'person'} size={24} color={'#FFFFFF'} />
            <Text style={{color: 'white'}}>Account</Text>
        </View>
    </View>

  );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'space-around',
        position: 'absolute',
        bottom: 0,
        width: WIDTH,
        height: 100,
        backgroundColor: "#363535",
        flexDirection: "row",
        flexWrap: "wrap",
    },
    tabButton: {
        paddingTop: 15, 
        alignItems: 'center',
    }
});
