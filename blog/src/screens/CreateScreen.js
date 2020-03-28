import React, { useContext, useState } from 'react';
import {View, Text, StyleSheet, FlatList, Button, TouchableOpacity, TextInput} from 'react-native';
import {Context as BlogContext} from '../context/BlogContext';
import BlostPostForm from '../components/BlogPostForm';
const CreateScreen = ({navigation}) => {

    const { addBlogPost } = useContext(BlogContext);

    return (
        <BlostPostForm actionName="Create New Blog" onSubmit={(title, content)=>{
            addBlogPost(title, content, ()=>navigation.navigate('Index'))
        } }/>
    );
}

export default CreateScreen;