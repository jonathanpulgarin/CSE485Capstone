import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  ImageBackground,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import bgImage from './images/login_background.png'; // Login Background 
import logo from './images/logo.jpg'; // Logo on Login Page 


const { width: WIDTH } = Dimensions.get('window')

export default function App() {
  return (
    <ImageBackground source={bgImage} style={styles.backgroundContainer}>
          <View style={styles.logoContainer}>
            <Image source={logo} style={styles.logo} />
            <Text style={styles.logoText}>CSE 485 Capstone: Web4site.net - TRAIND - Mobile app for personal trainers</Text>
          </View>

          <View>
            <TextInput 
                  style={styles.input}
                  placeholder={'Username'}
                  placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                  underlineColorAndroid='transparent'
            />
          </View>

          <View>
            <TextInput 
                  style={styles.input}
                  placeholder={'Password'}
                  secureTextEntry={true} // Hides the password
                  placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                  underlineColorAndroid='transparent'
            />
          </View>

          <TouchableOpacity style={styles.btnLogin}>
                  <Text style={styles.text} >Login</Text>
            </TouchableOpacity>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  // Background Container for Login Background
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center'
  },
  // Main Logo on Login Page
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20
  },
  // Size of the Logo on the Login Page
  logo: {
    width: 120,
    height: 120,
  },
  // Text Underneath the Logo
  logoText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    marginTop: 10,
    opacity: 0.5
  }, 
  // Username and Password Input text area on Login Page
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    color: 'rgba(255, 255, 255, 0.7)',
    marginHorizontal: 25
  },
  // Login Button on the Login Page
  btnLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#432577',
    justifyContent: 'center',
    marginTop: 20
  },
  // Text "Login" on the Login page
  text: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 20,
    textAlign: 'center'
  }
  
});
