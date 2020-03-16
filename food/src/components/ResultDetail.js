import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const ResultDetail = ({result}) => {
    return (
        <View style={styles.containerStyle}>
            <Image source={{url: result.image_url}} style={styles.imageStyle} />
            <Text style={styles.nameStyle}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        marginLeft: 15
    },
    imageStyle: {
        borderRadius: 4,
        width: 250,
        height: 120
    },
    nameStyle: {
        fontWeight: 'bold',
        fontSize: 16
    }
});

export default ResultDetail;