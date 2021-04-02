import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Dimensions,
  Image
} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'
import MainLogo from '../images/traind.jpg'


const { width: WIDTH } = Dimensions.get('window')

export default function NavBar(props) {
  return (
    <View style={styles.main}>
        <Image source={MainLogo} style={styles.logo}></Image>
        <MaterialIcons style={styles.messagingIcon}
            name={'question-answer'}
            size={40}
            color={'#FFFFFF'}
            onPress={() =>
                props.navigation.navigate('Messages')
            }
            />
    </View>

  );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        position: 'absolute',
        top: 0,
        width: WIDTH,
        height: 120,
        backgroundColor: "#363535",
        flexDirection: "row",
        flexWrap: "wrap",
    },
    tabButton: {
        paddingTop: 15, 
        alignItems: 'center',
    },
    logo: {
        position: 'absolute',
        bottom: 20,
        left: 30,
        width: 180,
        height: 40,
    },
    messagingIcon: {
        position: 'absolute',
        right: 30,
        bottom: 20
    }
});
