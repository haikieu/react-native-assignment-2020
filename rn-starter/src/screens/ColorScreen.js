import React, { useState } from 'react';
import { View, StyleSheet, Button, FlatList} from 'react-native';

const ColorScreen = () => {

    const [colors, setColors] = useState([]);
    console.log(colors);

    return (
        <View>
            <Button title="Add a Color" onPress={() => {
                setColors([...colors, randomRgb()]);
            }}/>
            <FlatList
                keyExtractor={(item) => {return item}}
                data={colors}
                renderItem={({item}) => {
                    return <View style={{ height: 100, width: 100, backgroundColor: item}}/>
                }}
            ></FlatList>
        </View>
    );
};

const randomNumber = () => { return Math.floor(Math.random() * 256);};
const randomRgb = () => {
    const [red, green, blue] = [randomNumber(), randomNumber(), randomNumber()]
    return `rgb(${red},${green},${blue})`;
};

const styles = StyleSheet.create({

});

export default ColorScreen;