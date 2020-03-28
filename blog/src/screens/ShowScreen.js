import React, { useContext } from 'react';
import {View, Text, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import {EvilIcons} from '@expo/vector-icons/EvilIcons'

const ShowScreen = ({navigation}) => {

    const { state } = useContext(BlogContext);

    const id = navigation.getParam('id');

    const blogPost = state.find((blogPost) => blogPost.id === id);

    return (
        <View>
            <Text>Title: {blogPost.title}</Text>
            <Text>Content: {blogPost.content}</Text>
        </View>
    );
}

ShowScreen.navigationOptions = ({navigation}) => {
    const blogId = navigation.getParam('id');
    return {
        headerRight: (<TouchableOpacity onPress={()=>navigation.navigate('Edit', {id: blogId}) }><Text>Edit</Text></TouchableOpacity>)
    };
};

const Styles = StyleSheet.create({

});

export default ShowScreen;