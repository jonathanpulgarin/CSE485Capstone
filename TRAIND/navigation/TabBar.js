import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Dimensions
} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'
import { BlurView } from 'expo-blur';


const { width: WIDTH } = Dimensions.get('window')

export default function TabBar() {
  return (
    <View style={styles.main}>
        <View style={styles.tabButton}>
            <MaterialIcons name={'home'} size={30} color={'#F15A24'} />
            <Text style={{color: '#F15A24'}}>Home</Text>
        </View>
        <View style={styles.tabButton}>
            <MaterialIcons name={'search'} size={30} color={'#FFFFFF'} />
            <Text style={{color: 'white'}}>Search</Text>
        </View>
        <View style={styles.tabButton}>
            <MaterialIcons name={'person'} size={30} color={'#FFFFFF'} />
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
