import axios from 'axios'

 export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 6K1qkBR73MZI2BPoTzVyTjEyn8oL2lYP4886TzLN2wTdJBs2GSnxCUDVq_Tn6DdDySmgXe7BGL2ELoVa1k0HulHK0ykR-RIT533JvKd7BepRvEBPkd9gDgK95nVoXnYx'
    }
 });