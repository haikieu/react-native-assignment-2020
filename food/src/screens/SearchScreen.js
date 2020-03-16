import React, { useState , useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = ({navigation}) => {

    const [term, setTerm] = useState("");
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {

        return results.filter(result => {
            return result.price === price;
        });
    }
    
    return (
        <View style={styles.container}>
            <SearchBar term={term} onTermChanged={ (newTerm)=>setTerm(newTerm)} onTermSubmit={searchApi}></SearchBar>
            { errorMessage ? <Text style={styles.errorStyle}>{errorMessage}</Text> : null }
            <ScrollView>
                <ResultsList title='Cost Effective' results={filterResultsByPrice('$')} navigation={navigation} />
                <ResultsList title='Bit Pricier' results={filterResultsByPrice('$$')} navigation={navigation}/>
                <ResultsList title='Big Spender' results={filterResultsByPrice('$$$')} navigation={navigation}/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1
    },
    errorStyle: {
        color: 'red'
    }
});


export default SearchScreen;