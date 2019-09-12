import { AT_POST } from '../actions/action-types';

const initialState = {
    postList:[]
}


export default  function  ReducerActivePosts (state = [] ,action)  {
    switch(action.type) {
        case  AT_POST.READ_POST:
            return action.payload;
    }
    return state
}