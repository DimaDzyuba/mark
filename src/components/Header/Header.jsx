import React from 'react'
import styles from './styles.module.scss'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
        <header className={styles.header}>
            <div className={styles.header__logo}>
                <Link to='/home' >
                    <img src='/images/logo.png' alt='logotip' />
                </Link>
            </div>
            <div className={styles.header__buttons}>
                <button className={styles.header__button_login}>
                    <span>Вход</span>
                </button>
                <Link to='/auth/registration' className={styles.header__button_registration}><span>Регистрация</span></Link>
            </div>
        </header>
  )
}
