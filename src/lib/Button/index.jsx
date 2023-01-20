import React from 'react'
import styles from './styles.module.scss'

export const Button = ({ onSubmit, title }) => {
  return (
      <button className={styles.button} onSubmit={onSubmit}>
        {title}
      </button>

  )
}
