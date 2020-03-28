import React, { useContext, useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button, TouchableOpacity} from 'react-native';
import {Context as BlogContext} from '../context/BlogContext';
import BlostPostForm from '../components/BlogPostForm';

const EditScreen = ({navigation}) => {

    const { state, editBlogPost } = useContext(BlogContext);

    const id = navigation.getParam('id');

    const blogPost = state.find((blogPost) => blogPost.id === id);

    return (
        <BlostPostForm actionName="Submit" initialValues={{title: blogPost.title, content: blogPost.content}} onSubmit={(title, content)=>{
            editBlogPost(id, title, content, ()=>navigation.pop() )
            
        }}/>
    );
}

export default EditScreen;