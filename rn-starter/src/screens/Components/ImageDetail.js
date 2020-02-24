import React from 'react';
import { View, Image, StyleSheet, Text} from 'react-native';

const ImageDetail = (props) => {

    console.log(props);

    return (
    <View>
        <Image source={props.imageSource}></Image>
        <Text>{props.title}</Text>
    </View>
    );
};

const styles = StyleSheet.create({

});

export default ImageDetail;