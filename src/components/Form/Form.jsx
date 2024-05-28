import React, { useState } from 'react'
import styles from "./Form.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostAction } from '../../redux/actions/PostAction';



const Form = () => {


    const [search,setSearch]=useState("");
    const dispatch=useDispatch();
    const {posts,error,loading}=useSelector((store)=>store);

    const submit=(e)=>{
        e.preventDefault();
        if(!search){
            alert("Lüften aramak isteğiniz postun id'sini giriniz");
            return;
        }
        dispatch(fetchPostAction(search));
        setSearch("");


    }
 
  return (
    <div className={styles.container}>
        <h3>React Redux Projesi</h3>
        <p>React Redux ile API'DAN VERİ ÇEKME</p>

        <form onSubmit={submit}>
                <input onChange={(e)=>setSearch(e.target.value)}  value={search} type="number" min={1} max={30}/>
                <button>Arama İşlemi Yapabilirsiniz.</button>
        </form>
    </div>
  )
}

export default Form
