import React from 'react'
import styles from './styles.module.scss'

export const Button = ({ onClick, title }) => {
  return (
      <button className={styles.button} onClick={onClick}>
        {title}
      </button>

  )
}
