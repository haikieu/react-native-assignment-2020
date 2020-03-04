import React, { useState, useReducer } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import ColorCounter from './Components/ColorCounter';

const COLOR_INCREMENT = 10;

const reducerAction = (state, action) => {

    switch(action.color) {
        case "red":
            return {...state, red: state.red + action.amount};
        case "green":
            return {...state, green: state.green + action.amount};
        case "blue":
            return {...state, blue: state.blue + action.amount};
        default: return state
    }
};

const SquareScreen = () => {

    const [state, dispatch] = useReducer(reducerAction, {red: 0, green: 0, blue: 0});
    const { red, green, blue} = state;

    return (
        <View>
            <ColorCounter color="red" onIncrease={ ()=> { dispatch({color: "red", amount: COLOR_INCREMENT})}} onDecrease={ ()=>{dispatch({color: "red", amount: COLOR_INCREMENT})}}/>
            <ColorCounter color="green" onIncrease={ ()=> {dispatch({color: "green", amount: COLOR_INCREMENT})}} onDecrease={ ()=> {dispatch({color: "green", amount: COLOR_INCREMENT})}}/>
            <ColorCounter color="blue" onIncrease={ ()=> {dispatch({color: "blue", amount: COLOR_INCREMENT})}} onDecrease={ ()=> {dispatch({color: "blue", amount: COLOR_INCREMENT})}}/>
            <View style={{ width: 150, height: 150, backgroundColor: `rgb(${red},${green},${blue})`}}/>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default SquareScreen;
