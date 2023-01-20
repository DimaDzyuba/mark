import React from 'react'
import styles from '../../pages/RestorePage/styles.module.scss'
import { useForm } from 'react-hook-form'
import { Links } from '../../lib/Links'
import { Title } from '../../lib/Title'
import { Input } from '../../lib/Input'
import { Button } from '../../lib/Button'

export const RestoreForm = () => {
  const { handleSubmit, formState: { errors }, formState } = useForm({
    mode: 'onBlur'
  }
  )
  return (
        <form className={styles.form}>
            <div className={styles.form__wrapper}>
                <Title
                    title2='Забыл пароль'
                    span='?'
                />

                <Input
                    type='email'
                    placeholder='Почта'
                />
                <Button title='Отправить ссылку на почту' />
                <Links title='Вернуться' to='/auth/login' />
            </div>

        </form>
  )
}
