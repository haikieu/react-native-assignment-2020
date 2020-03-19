import React, {useState} from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({children}) => {

    const [blogPosts, setBlogPosts] = useState([]);

    const addBlogPost = () => {
        console.log('add new blog post');
        setBlogPosts([...blogPosts, {title: `Blog Post #${blogPosts.length + 1}`}]);
    };

    const editBlogPost = ()=>{}
    const deleteBlogPost = ()=>{}

    return (
        <BlogContext.Provider value={{data: blogPosts, addBlogPost}} >
            {children}
        </BlogContext.Provider>
    );
};

export default BlogContext;