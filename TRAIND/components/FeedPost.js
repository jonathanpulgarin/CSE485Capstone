import React, { Component } from 'react';
import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import postImage from '../images/1.jpg'
import { Ionicons } from '@expo/vector-icons'

export default function FeedPost(props) {
    return (
        <View style={styles.container}>
            <ImageBackground source={{uri: props.info.sessionPhoto}} style={styles.postImage} imageStyle={{
                resizeMode: 'cover',
                alignSelf: 'center'
            }} />
            <View style={styles.postTextContainer}>
                <View style={styles.topTextContainer}>
                    <View>
                        <View style={styles.topLeftContainer}>
                            <View style={styles.sessionType}>
                                <Text style={styles.sessionTypeText}>{props.info.sessionType}</Text>
                            </View>
                            <Text style={styles.location}>{props.info.sessionLocation}</Text>
                        </View>
                    </View>
                    <View style={styles.starContainer}>
                        <Text style={styles.starContainerText}>{props.info.stars} ({props.info.numberOfReviews})</Text>
                        <Ionicons name={'star'} size={30} color={'#FF6079'} />
                    </View>
                </View>
                <View style={styles.bottomTextContainer}>
                    <View>
                        <Text style={styles.instructor}>Hosted by {props.info.instructorName}</Text>
                        <Text style={styles.sessionSkill}>{props.info.skillLevel}</Text>
                    </View>
                    <View style={styles.bookingButton}>
                        <Ionicons name={'calendar'} size={30} color={'#FFFFFF'} />
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 300,
        maxHeight: 220,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: -3, height: 3 },
        shadowOpacity: 0.22,
        shadowRadius: 10,
        marginRight: 30,
        borderRadius: 8,
    },
    postImage: {
        width: 300,
        height: 100,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        overflow: 'hidden'
    },
    postTextContainer: {
        paddingTop: 10,
        paddingRight: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        flex: 1,
        flexDirection: 'column',
    },
    topTextContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    topLeftContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    sessionType: {
        height: 35,
        paddingLeft: 5,
        paddingRight: 5,
        minWidth: 70,
        borderColor: '#FF6079',
        borderWidth: 2,
        borderRadius: 8,
        justifyContent: 'center',
    },
    sessionTypeText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#FF6079',
        textAlign: 'center'
    },
    location: {
        color: '#888888',
        fontSize: 12,
        marginLeft: 10,
        marginTop: 9
    },
    starContainer: {
        flex: 1,
        flexDirection: 'row-reverse',
    },
    starContainerText: {
        fontSize: 12,
        color: '#888888',
        marginLeft: 5,
        marginTop: 9
    },
    bottomTextContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    instructor: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#888888',
    },
    sessionSkill: {
        fontSize: 12,
        color: '#888888',
        marginTop: 5,
    },
    bookingButton: {
        height: 50,
        width: 50,
        backgroundColor: '#FF6079',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
