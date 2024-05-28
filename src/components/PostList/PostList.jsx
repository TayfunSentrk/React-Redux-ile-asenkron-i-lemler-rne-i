import React, { useEffect } from 'react'
import styles from "./PostList.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { fetchPostsAction } from '../../redux/actions/PostAction'
import PostItem from '../PostItem/PostItem'



const PostList = () => {

    const dispatch=useDispatch();
    const {posts,error,loading}=useSelector((store)=>store);
    useEffect(()=>{
        dispatch(fetchPostsAction());
    },[dispatch])
  return (
    <div className={styles.container}>
        {
            loading && <p>Loading....</p>
        }
        {
            error && <p>{error.status.code}</p>
        }
        {
            !loading && !error && posts.map((item)=><PostItem  key={item.id} item={item}/>)
        }
    </div>
  )
}

export default PostList
