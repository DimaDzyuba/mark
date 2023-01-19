import React, { Component, useState } from 'react'
import styles from './styles.module.scss'

export const Title = ({ title, title2, span }) => {
  return (
      <div>
        <h1 className={styles.title}>{title}
      </h1>
        <h1 className={styles.title}>{title2}<span>{span}</span></h1>
      </div>

  )
}
