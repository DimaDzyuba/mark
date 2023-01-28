import React, { useState } from 'react'
import styles from './style.module.scss'
import { classNames } from '../../utils/classNames'

export const Input = ({ type, placeholder, value, onChange, error }) => {
  const className = classNames(
    styles.input,
    {
      inputPass: type === 'password',
      [styles.email]: type === 'email',
      [styles.errors]: error
    }
  )

  return (
      <div className={className}>
          {error || null}
          <input
              type={type}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
          />
      </div>
  )
}
