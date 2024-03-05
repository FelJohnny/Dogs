import React from 'react'
import styles from './Input.module.css'

const Input = (props) => {
  return (
    <div className={styles.wrapper}>
        <label className={styles.label} htmlFor={props.name}>
            {props.label}
        </label>
        
        <input 
            className={styles.input}
            type={props.type}
            id={props.name}
            name={props.nam}
        />
        <p className={styles.error}>Error</p>
    </div>
  )
}
/*
classes-Styles:
    label,
    input,
    wrapper,
    errror
*/

export default Input
