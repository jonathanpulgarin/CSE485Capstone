import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';
import FeedPost from './FeedPost';

export default function PostScroll(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.scrollSectionTitle}>{props.title}</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollViewContainer}>
                {
                    props.list.map(item => 
                        <FeedPost key={item.id} info={item}></FeedPost>
                    )
                }
                <View style={{width: 30}}></View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: 30,
        maxHeight: 330,
        minHeight: 330
    },
    scrollSectionTitle: {
        color: '#484848',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 30,
    },
    scrollViewContainer: {
        paddingTop: 20,
        paddingLeft: 30,
    },
});
