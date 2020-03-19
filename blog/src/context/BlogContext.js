
import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return [...state, { title: `Blog post #${state.length + 1}`}]
        default:
            return state;
    }
};

const addBlogPost = (dispatch) => {
    return ()=> {
        dispatch({ type: 'add'});    
    };
};

export const {Context, Provider} = createDataContext(blogReducer, {addBlogPost}, []);   