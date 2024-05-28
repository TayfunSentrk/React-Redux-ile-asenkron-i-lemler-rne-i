import React from 'react'
import styles from "./Form.module.css"


const Form = () => {
  return (
    <div className={styles.container}>
        <h3>React Redux Projesi</h3>
        <p>React Redux ile API'DAN VERİ ÇEKME</p>

        <form>
                <input type="number" min={1} max={30}/>
                <button>Arama İşlemi Yapabilirsiniz.</button>
        </form>
    </div>
  )
}

export default Form
