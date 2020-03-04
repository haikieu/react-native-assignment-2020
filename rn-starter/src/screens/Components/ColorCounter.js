import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


const ColorCounter = ({color, onIncrease, onDecrease}) => {

    

    return (
        <View>
            <Text>{color}</Text>
            <Button title={`Increase ${color}`} onPress={onIncrease} />
            <Button title={`Decrease ${color}`} onPress={onDecrease} />
        </View>
    );
};

const styles = StyleSheet.create({
    redBtn : {
        backgroundColor: 'rgb(255,0,0)',
        color: 'rgb(255,0,0)'
    },
    blueBtn : {
        backgroundColor: 'rgb(0,191,255)'
    },
    greenBtn : {
        backgroundColor: 'rgb(50,205,50)'
    },
});

export default ColorCounter;