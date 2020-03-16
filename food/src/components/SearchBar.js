import React from 'react';
import { View, Text, StyleSheet, TextInput} from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({term, onTermChanged, onTermSubmit}) => {
    return (
        <View style={styles.background}>
            <Feather name='search' style={styles.iconStyle}/>
            <TextInput placeholder='search' autoCapitalize="none" style={styles.inputStyle} value={term} onChangeText={(newTerm)=>{onTermChanged(newTerm)}} onSubmitEditing={()=>onTermSubmit()} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        
    },
    background: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        margin: 15,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputStyle: {
        flex:1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 30,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;