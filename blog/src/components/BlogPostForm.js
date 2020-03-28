import React, {useState } from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';

const BlostPostForm = ({actionName, initialValues, onSubmit}) => {

    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);


    return (
        <View>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput style={styles.input} value={title} onChangeText={(text)=>setTitle(text)}/>
            <Text style={styles.label}>Enter Content:</Text>
            <TextInput style={styles.input} value={content} onChangeText={(text)=>setContent(text)}/>
            <Button title={actionName} onPress={()=>{
                onSubmit(title, content);
             }}/>
        </View>
    );
};

BlostPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
};


const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        fontSize: 18,
        borderColor: 'black',
        margin: 5,
        padding: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    }
});

export default BlostPostForm;

