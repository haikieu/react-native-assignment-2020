import React, { useContext } from 'react';
import {View, Text, StyleSheet, FlatList, Button} from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import Feather from '@expo/vector-icons/Feather';

const IndexScreen = () => {

    const {state, addBlogPost} = useContext(BlogContext);

    return (
        <View>
            <Text>index screen</Text>
            <Button title='Add Post' onPress={addBlogPost}/>
            <FlatList 
                data={state}
                keyExtractor={blogPost=>blogPost.title}
                renderItem={({item})=>{

                    return (
                        <View style={styles.row}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Feather name='trash'style={styles.icon}/>
                        </View>
                    );
                }}
             />
        </View>
    );
};

const styles = StyleSheet.create({
    row : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderColor: 'gray',
        paddingHorizontal: 10
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
});

export default IndexScreen;