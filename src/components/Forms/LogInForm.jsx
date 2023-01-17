import React from 'react'
import styles from '../../pages/LogInPage/styles.module.scss'
import { useForm } from 'react-hook-form'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

export const LogInForm = () => {
  const { handleSubmit, formState: { errors }, formState } = useForm({
    mode: 'onBlur'
  }
  )
  return (
        <form className={styles.form}>
            <div className={styles.form__wrapper}>
                <h1 className={styles.form__title}>вход
                    <br/>В Отмечалочку<span>.</span>
                </h1>

                <input className= {classNames(styles.form__input, styles.form__inputEmail)} type='email' placeholder="Почта" />

                <input className={styles.form__input} type='password' placeholder="Пароль" />
                <divc className={styles.form__checkbox_wrapper}>
                    <input className={styles.form__input_checkbox} type='checkbox' placeholder="Пароль" />
                    <label className={styles.form__checkbox_label}>Запомните меня таким</label>
                </divc>

                <button className={styles.form__button} >
                    Залогиниться
                </button>
                <Link to='/auth/restore' className={styles.form__link_restore}>Забыл пароль?</Link>
            </div>

        </form>
  )
}
