import React from 'react'
import styles from './Input.module.css'

const Input = ({name, label, type, value, onChange,onBlur, error}) => {
  return (
    <div className={styles.wrapper}>
        <label className={styles.label} htmlFor={name}>
            {label}
        </label>
        
        <input 
            className={styles.input}
            type={type}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
        />
        {error &&<p className={styles.error}>{error}</p>}
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
