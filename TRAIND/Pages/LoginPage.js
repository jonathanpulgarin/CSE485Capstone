import React, { Component, useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	ImageBackground,
	Image,
	TextInput,
	Dimensions,
	TouchableOpacity,
	Keyboard
} from 'react-native';
import { BlurView } from 'expo-blur';

import bgImage from '../images/trainer-bg.jpg'; // Login Background 
import logo from '../images/logo.jpg'; // Logo on Login Page 

const { width: WIDTH } = Dimensions.get('window')

export default function LoginPage() {
	const [email, setEmailValue] = useState(null)
	const [password, setPasswordValue] = useState(null)

	async function authorizeUser() {
		alert(`Email: ${email}, Password: ${password}`)
	}

	return (
		<TouchableOpacity style={styles.backgroundContainer} onPress={() => Keyboard.dismiss()} activeOpacity={1}>
			<ImageBackground source={bgImage} style={styles.imageBackgroundContainer} imageStyle={{
				resizeMode: "cover",
				alignSelf: "flex-end"
			}}>
				<View style={styles.logoContainer}>
					<Image source={logo} style={styles.logo} />
					{/*<Text style={styles.logoText}>CSE 485 Capstone: Web4site.net - TRAIND - Mobile app for personal trainers</Text>*/}
				</View>
				<View>
					<TextInput
						style={styles.input}
						placeholder={'Username'}
						placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
						underlineColorAndroid='transparent'
						onChangeText={(text) => setEmailValue(text)}
					/>
				</View>

				<View>
					<TextInput
						style={styles.input}
						placeholder={'Password'}
						secureTextEntry={true} // Hides the password
						placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
						underlineColorAndroid='transparent'
						onChangeText={(text) => setPasswordValue(text)}
					>
						<BlurView intensity={100}></BlurView>
					</TextInput>
				</View>

				<TouchableOpacity style={styles.btnLogin} onPress={authorizeUser}>
					<Text style={styles.loginBtnText} >Login</Text>
				</TouchableOpacity>
			</ImageBackground>
		</TouchableOpacity>
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
	imageBackgroundContainer: {
		flex: 1,
		width: WIDTH,
		height: null,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 0,

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
		opacity: 0.5,
		textAlign: 'center',
		paddingLeft: 25,
		paddingRight: 25
	},
	// Username and Password Input text area on Login Page
	input: {
		width: WIDTH - 55,
		height: 45,
		fontSize: 16,
		paddingLeft: 45,
		marginBottom: 5,
		backgroundColor: 'rgba(255, 255, 255, 0.3)',
		color: 'rgba(0, 0, 0, 1)',
		marginHorizontal: 25,
	},
	// Login Button on the Login Page
	btnLogin: {
		width: WIDTH - 55,
		height: 45,
		backgroundColor: '#64B6AC',
		justifyContent: 'center',
		marginTop: 20
	},
	// Text "Login" on the Login page
	loginBtnText: {
		color: 'rgba(255, 255, 255, 0.7)',
		fontSize: 20,
		textAlign: 'center',
		fontWeight: '600',
	}

});
