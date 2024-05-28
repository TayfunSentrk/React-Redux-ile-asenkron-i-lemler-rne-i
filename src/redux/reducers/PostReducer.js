import { FETCH_POSTS_ERROR, FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_POST_ERROR, FETCH_POST_REQUEST, FETCH_POST_SUCCESS } from "./PostActionType";

const initalValue={
    posts:[],
    error:"",
    loading:false
}

const postReducer=(state=initalValue,action)=>{
    switch(action.type){
        case FETCH_POSTS_REQUEST:
            return {...state,loading:true,error:""};
        case FETCH_POSTS_SUCCESS:
            return {...state,posts:action.payload,loading:false,error:""};
        case FETCH_POSTS_ERROR:
            return {...state,posts:[],loading:false,error:action.payload}

        case FETCH_POST_REQUEST:
            return {...state,loading:true,error:""};
        case FETCH_POST_SUCCESS:
            return {...state,posts:action.payload,loading:false,error:""}

        case FETCH_POST_ERROR:
            return {...state,posts:[],error:action.payload,loading:false};

        default:
            return state
    }
}

export default postReducer