import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

//JSX
const ComponentScreen = function() {

    const textOfHeader = <Text style={styles.header}>Getting started with react native!</Text>
    const textOfParagraph = <Text style={styles.paragrah}>My name is Sam</Text>


    return (
    <View>
        {textOfHeader}
        {textOfParagraph}
    </View>
    )
};

const styles = StyleSheet.create({
    header: {
        fontSize: 30
    },
    paragrah: {
        fontSize: 20
    },
    textRed: {
        color: 'red'
    }
});

export default ComponentScreen;