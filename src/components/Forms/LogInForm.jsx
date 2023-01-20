import React from 'react'
import styles from '../../pages/LogInPage/styles.module.scss'
import { useForm } from 'react-hook-form'
import classNames from 'classnames'
import { Links } from '../../lib/Links'
import { Title } from '../../lib/Title'
import { Input } from '../../lib/Input'
import { Button } from '../../lib/Button'

export const LogInForm = () => {
  const { handleSubmit, formState: { errors }, formState } = useForm({
    mode: 'onBlur'
  }
  )
  return (
        <form className={styles.form}>
            <div className={styles.form__wrapper}>
                <Title
                    title='вход'
                    title2='в отмечалочку'
                    span='.'
                />

                <Input
                    type='email'
                    placeholder='Почта'
                />

                <Input
                    type='password'
                    placeholder='Пароль'
                />
                <div className={styles.form__checkbox_wrapper}>
                    <input className={styles.form__input_checkbox} type='checkbox' />
                    <label className={styles.form__checkbox_label}>Запомните меня таким</label>
                </div>
                <Button title='Залогиниться' />
                <Links title='Забыл пароль?' to='/auth/restore' />
            </div>

        </form>
  )
}
