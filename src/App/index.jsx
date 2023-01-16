import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from '../pages/Home/HomePage'
import { LogInPage } from '../pages/LogInPage/LogInPage'
import { SignInPage } from '../pages/SignInPage/SignInPage'
import { RestorePage } from '../pages/RestorePage/RestorePage'
import styles from './styles.module.scss'

export const App = () => {
  return (
            <BrowserRouter>
                <div className={styles.wrapper}>
                    <div className={styles.container}>
                        <Routes>
                            <Route path='/' element={<HomePage />}></Route>
                            <Route path='/auth/login' element={<LogInPage />}></Route>
                            <Route path='/auth/registration' element={<SignInPage />}></Route>
                            <Route path='/auth/restore' element={<RestorePage />}></Route>
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>

  )
}
