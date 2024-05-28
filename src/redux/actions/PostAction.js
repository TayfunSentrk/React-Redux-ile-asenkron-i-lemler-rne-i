

import axios from "axios";
import { FETCH_POSTS_ERROR, FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_POST_ERROR, FETCH_POST_REQUEST, FETCH_POST_SUCCESS } from "./PostActionType";
import apiUrl from "../../utils/apiUrl";



const fetchPostsRequest=()=>{
    return {
        type:fetchPostsRequest
    }
}

const fetchPostsSuccess=(data)=>{
    return {
        type:FETCH_POSTS_SUCCESS,
        payload:data
    }
}

const fetchPostsError=(error)=>{
    return {
        type:FETCH_POSTS_ERROR,
        payload:error
    }
}

const fetchPostsAction=async ()=>{
    return (dispatch)=>{
            dispatch(fetchPostsRequest());
        try{
            const response=await axios.get(apiUrl);
            dispatch(fetchPostsSuccess(response.data));
        }

        catch(error){
            dispatch(fetchPostsError(error))
        }
    }
}

