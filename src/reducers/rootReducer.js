const initState = {
    posts: [
        {id: '1', title: '111111111', body: 'POST 1'},
        {id: '2', title: '222222222', body: 'POST 2'},
        {id: '3', title: '333333333', body: 'POST 3'}
    ]
}

const rootReducer = (state = initState, action) => {
    if(action.type === 'DELETE_POST'){
        let newPost = state.posts.filter(post => {
            return action.id !== post.id
        });
        return {
            ...state,
            posts: newPost
        }
    }
    return state;
}

export default rootReducer