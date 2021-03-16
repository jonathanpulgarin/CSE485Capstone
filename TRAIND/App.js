import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  ImageBackground
} from 'react-native';

import bgImage from './images/login_background.jpg';

export default function App() {
  return (
    <ImageBackground source={bgImage} style={styles.backgroundContainer}>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
