import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default () => {

    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    searchTerm,
                    location: 'san jose',
                }});
            console.log("request done");
            setErrorMessage("");
            setResults(response.data.businesses);
        } catch(err) {
            setErrorMessage("" + err)
        }
    };

    useEffect(()=>{ searchApi("pizza")}, []);

    return [searchApi, results, errorMessage];
}