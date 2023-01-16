import React from 'react'
import styles from './style.module.scss'
import { classNames } from '../../utils/classNames'

export const Input = ({ type, placeholder, value, onChange }) => {
  const className = classNames(
    styles.input

  )
  return (
      <div>
          <input
              type={type}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              className={className}
          />
      </div>
  )
}
