import React from 'react'
import styles from '../../pages/SignInPage/styles.module.scss'
import { useForm } from 'react-hook-form'
import classNames from 'classnames'

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
  return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.form__wrapper}>
                <h1 className={styles.form__title}>регистрация
                    <br/>В Отмечалочке<span>.</span>
                </h1>
                <input className={classNames(styles.form__input, styles.form__inputName, { [styles.form__errorInput]: errors.userName })}
                       type='text'
                       placeholder="Имя и Фамилия"
                       {...register('userName', { required: 'Введите Имя и Фамилию' })} />
                {errors.userName && <div className={styles.form__errorInputText}>{errors.userName.message}</div>}

                <input className={classNames(styles.form__input, { [styles.errorInput]: errors.email })} type='email' placeholder="Почта" {...register('email', { required: 'Неверный email' })} />
                {errors.email && <div className={styles.form__errorInputText}>{errors.email.message}</div>}

                <input className={styles.form__input} type='password' placeholder="Пароль" {...register('pass')} />

                <input className={styles.form__input} type='password' placeholder="Еще раз пароль"{...register('againPass', { required: true })} />

                {errors.againPass && <span className={styles.form__errors_againPass}>Неверный пароль</span>}
                <button className={styles.form__button} placeholder='регистрация' onSubmit={handleSubmit(onSubmit)}>
                    Регистрация
                </button>
            </div>

        </form>
  )
}
