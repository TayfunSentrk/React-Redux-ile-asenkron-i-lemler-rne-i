

import axios from "axios";
import { FETCH_POSTS_ERROR, FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_POST_ERROR, FETCH_POST_REQUEST, FETCH_POST_SUCCESS } from "./PostActionType";
import apiUrl from "../../utils/apiUrl";



const fetchPostsRequest=()=>{
    return {
        type:FETCH_POSTS_REQUEST
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

export const fetchPostsAction= ()=>{
    return async (dispatch)=>{
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

const fetchPostRequest=()=>{
    return {
        type:FETCH_POST_REQUEST
    }
}


const fetchPostSuccess=(data)=>{
    return {
        type:FETCH_POST_SUCCESS,
        payload:data
    }
}

const fetchPostError=(error)=>{
    return {
        type:FETCH_POST_ERROR,
        payload:error
    }
}

export const fetchPostAction=(id)=>{
    return async (dispatch)=>{
            dispatch(fetchPostRequest());
        try{
            const response=await axios.get(`${apiUrl}/${id}`)
            dispatch(fetchPostSuccess(response.data));
        }

        catch(error){
            dispatch(fetchPostError(error));
        }
    }
}