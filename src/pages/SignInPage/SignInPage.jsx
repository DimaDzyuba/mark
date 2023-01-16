import React from 'react'
import { useForm } from 'react-hook-form'
import { Header } from '../../components/Header/Header'
import styles from './styles.module.scss'

const SignInPage = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    mode: 'onBlur'
  })
  const onSubmit = data => console.log(data)
  console.log(watch('name'))
  return (
      <>
          <Header />
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
              <input type='text' placeholder="Фамилия и имя"
                     {...register('userName')}
              />
              <input placeholder="Почта" {...register('email', { required: 'Неверный email' })} />
              <input placeholder="Пароль" {...register('pass')} />

              {/* include validation with required or other standard HTML validation rules */}
              <input placeholder="Еще раз пароль"{...register('againPass', { required: true })} />
              {/* errors will return when field validation fails  */}
              {errors.againPass && <span>Неверный пароль</span>}

              <input type="submit" />
          </form>
      </>
  )
}

export { SignInPage }
