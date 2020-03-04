import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={Styles.viewStyle}>
            <Text style={Styles.textStyle}>Child 1</Text>
            <Text style={Styles.textStyle}>Child 2</Text>
            <Text style={Styles.textStyle}>Child 3</Text>
        </View>
        
    );
};

const Styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
    textStyle: {
        borderWidth:3,
        borderColor: 'red'
    }
});

export default BoxScreen;