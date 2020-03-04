import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

const reducer = (counterState, action) => {
    return counterState + action.payload;
};

const CounterScreen = () => {

    const [counterState, dispatch] = useReducer(reducer, 0)

    return (
        <View>
            <Button title="Increase" onPress={() => { 
                dispatch({ type: "setCounter", payload: 1})
            }}></Button>
            <Button title="Decrease" onPress={() => {
                dispatch({ type: "setCounter", payload: -1})
            }}></Button>
            <Text>Current Count: {counterState}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default CounterScreen;