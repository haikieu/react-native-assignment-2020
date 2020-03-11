import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={Styles.viewStyle}>
            <View style={Styles.viewOne}/>
            <View style={Styles.viewTwo}/>
            <View style={Styles.viewThree}/>
        </View>
        
    );
};

const Styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch'
    },
    viewOne: {
        backgroundColor: 'green',
        alignSelf:"stretch",
        borderWidth: 1,
        width: 50,
        height: 50
    },
    viewTwo: {
        backgroundColor: 'blue',
        borderWidth: 1,
        width: 50,
        height: 50,
        alignSelf: 'flex-end'
    },
    viewThree: {
        backgroundColor: 'red',
        alignSelf:"stretch",
        borderWidth: 1,
        width: 50,
        height: 50
    },
    textStyle: {
        borderWidth:3,
        borderColor: 'red'
    }
});

export default BoxScreen;