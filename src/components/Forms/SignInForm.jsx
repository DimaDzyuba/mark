import React from 'react'
import styles from '../../pages/SignInPage/styles.module.scss'
import { useForm } from 'react-hook-form'
import classNames from 'classnames'
import { Input } from '../../lib/Input'
import { Title } from '../../lib/Title'

export const SignInForm = () => {
  const { register, handleSubmit, formState: { errors }, formState } = useForm({
    mode: 'onBlur',
    defaultValues: {
      userName: '',
      email: '',
      pass: ''
    }
  })
  const onSubmit = data => console.log(data)
  console.log(errors, formState)
  function handleChange (event) {
    console.log(event.target.value)
  }
  return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.form__wrapper}>
                <Title
                    title='регистрация'
                    title2='в отмечалочке'
                    span='.'
                />
                <Input
                    type='text'
                    placeholder='Имя и Фамилия'
                    onChange={handleChange}
                />
                <Input
                    type='email'
                    placeholder='Почта'
                />
                <Input
                    type='password'
                    placeholder='Пароль'
                />
                <Input
                    type='password'
                    placeholder='Еще раз пароль'
                />

                <button className={styles.form__button} placeholder='регистрация' onSubmit={handleSubmit(onSubmit)}>
                    Регистрация
                </button>
            </div>

        </form>
  )
}
