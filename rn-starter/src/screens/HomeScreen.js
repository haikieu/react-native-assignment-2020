import React from "react";
import { Text, StyleSheet, Button, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({navigation}) => {

  return (
    <View>
      <Button onPress={() => { console.log(navigation.navigate('Component'))}} title="Go To Component Screen">Go To Components Demo</Button>
      <Button title="Go To List Screen" onPress={() => { navigation.navigate('List')}}/>
      <Button title="Go To Image Screen" onPress={() => { navigation.navigate('ImageScreen')}}/>
      <Button title="Go To Counter Screen" onPress={() => { navigation.navigate('CounterScreen')}}/>
      <Button title="Go To Color Screen" onPress={() => { navigation.navigate('ColorScreen')}}/>
      <Button title="Go To Square Screen" onPress={() => { navigation.navigate('SquareScreen')}}/>
      <Button title="Go To Text Screen" onPress={() => { navigation.navigate('TextScreen')}}/>
      <Button title="Go To Box Screen" onPress={() => { navigation.navigate('BoxScreen')}}/>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
