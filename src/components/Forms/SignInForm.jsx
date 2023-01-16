import React from 'react'
import styles from '../../pages/SignInPage/styles.module.scss'
import { useForm } from 'react-hook-form'

export const SignInForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    mode: 'onBlur'
  })
  const onSubmit = data => console.log(data)
  console.log(watch('userName'))
  return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.form__wrapper}>
                <h1 className={styles.form__title}>регистрация
                    <br/>В Отмечалочке<span>.</span>
                </h1>
                <input className={styles.form__input} type='text' placeholder="Фамилия и имя" {...register('userName')} />
                <input className={styles.form__input} type='email' placeholder="Почта" {...register('email', { required: 'Неверный email' })} />
                <input className={styles.form__input} type='password' placeholder="Пароль" {...register('pass')} />

                {/* include validation with required or other standard HTML validation rules */}
                <input className={styles.form__input} type='password' placeholder="Еще раз пароль"{...register('againPass', { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.againPass && <span className={styles.form__errors_againPass}>Неверный пароль</span>}

                <button className={styles.form__button} placeholder='регистрация'>
                    Регистрация
                </button>
            </div>

        </form>
  )
}
