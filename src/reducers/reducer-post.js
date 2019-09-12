import { AT_POST } from '../actions/action-types';

const initialState = {
    postList:[]
}


export default  function  ReducerPosts (state = [] ,action)  {
    switch(action.type) {
        case  AT_POST.READ_ALL_POST :
            return action.payload;
        case  AT_POST.DELETE :
            return state.filter((post) =>{
                if(post.id == action.payload) {
                    return false
                } else {
                    return true
                }
            })
        case  AT_POST.CREATE :
            return [...state, action.payload];
    }
    return state
}