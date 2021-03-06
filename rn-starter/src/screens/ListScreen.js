import React from "react";
import {View, Text, StyleSheet, ListView, FlatList} from "react-native";

const ListScreen = () => {

    const friends = [
        { age:20, name: 'Friend 1', key: '1'},
        { age:20, name: 'Friend 2', key: '2'},
        { age:20, name: 'Friend 3', key: '3'},
        { age:20, name: 'Friend 4', key: '4'},
        { age:20, name: 'Friend 5', key: '5'},
        { age:20, name: 'Friend 6', key: '6'},
        { age:20, name: 'Friend 7', key: '7'},
        { age:20, name: 'Friend 8', key: '8'},
        { age:20, name: 'Friend 9', key: '9'},
        { age:20, name: 'Friend 10', key: '10'},
    ];

    return (
        <FlatList scrollEnabled={true} showsHorizontalScrollIndicator={false} data={friends} renderItem={({item})=>{
        return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
        }}/>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 20
    }
});

export default ListScreen;