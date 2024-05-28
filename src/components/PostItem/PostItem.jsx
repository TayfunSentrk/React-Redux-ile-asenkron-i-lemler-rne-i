import React from 'react'
import styles from "./PostItem.module.css"
const PostItem = ({item}) => {
  return (
    <div className={styles.container}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
    </div>  
  )
}

export default PostItem
