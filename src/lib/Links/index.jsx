import React from 'react'
import styles from './styles.module.scss'
import { Link } from 'react-router-dom'

export const Links = ({ title, to }) => {
  return (
            <Link className={styles.link_restore} to={to}>{title}</Link>
  )
}
