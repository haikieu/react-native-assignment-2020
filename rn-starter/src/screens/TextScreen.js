import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const TextScreen = () => {

    const [text, setText] = useState('');

    return (
        <View style={styles.container}>
            <Text>Username</Text>
            <TextInput autoCorrect={false} style={styles.input} onChangeText={(newText)=>setText(newText)}/>
            <Text>Input text is {text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: 'rgb(0,0,0)',
    }
});

export default TextScreen;