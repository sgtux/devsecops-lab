import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './Auth.css'

import { authService } from '../../services'
import { ErrorMessage } from './styles'

import { userChanged } from '../../store/actions'

export function Auth() {

    const [nick, setNick] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const [isLogin, setIsLogin] = useState(true)
    const [errorMessage, setErrorMessage] = useState()

    const dispatcher = useDispatch()

    useEffect(() => window.document.body.style.backgroundColor = '#f0f2f5', [])

    useEffect(() => {
        setErrorMessage('')
    }, [nick, email, password, confirm, isLogin])

    function login(e) {
        e.preventDefault()
        authService.login({ email, password })
            .then(res => dispatcher(userChanged(res)))
            .catch(err => setErrorMessage(err.message))
    }

    function createAccount(e) {
        e.preventDefault()
        console.log('createAccount')
    }

    function changeScreen(toLogin) {
        setNick('')
        setEmail('')
        setPassword('')
        setConfirm('')
        setIsLogin(toLogin)
    }

    return (
        <div>
            <div className="container-account">
                <div className="container-title">
                    <h1 className="account-title">fakebook</h1>
                    <h3 className="account-subtitle">Connect with friends and the world around you on Fakebook.</h3>
                </div>
                {isLogin ?
                    <form id="form1" className="account-form-container" onSubmit={e => login(e)}>
                        <input type="text" name="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /><br />
                        <input type="password" name="senha" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                        <button type="submit" className="btn btn-login">Log In</button>
                        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
                        <a href="//#endregion" className="lk-forget-password">Forget Password?</a>
                        <div className="line"></div>
                        <button type="button" className="btn btn-new-account" onClick={() => changeScreen(false)}>Create New Account</button>
                    </form>
                    :
                    <form id="form2" autoComplete="off" className="account-form-container" onSubmit={e => createAccount(e)}>
                        <input type="text" name="nick" value={nick} placeholder="Nick" onChange={e => setNick(e.target.value)} /><br />
                        <input type="text" name="email" value={email} placeholder="Email" onChange={e => setEmail(e.target.value)} /><br />
                        <input type="password" name="password" value={password} placeholder="Password" onChange={e => setPassword(e.target.value)} />
                        <input type="password" name="confirm" value={confirm} placeholder="Confirm Password" onChange={e => setConfirm(e.target.value)} />
                        <button type="button" className="btn btn-login" onClick={e => createAccount(e)}>Create</button>
                        <div className="line"></div>
                        <button type="button" className="btn btn-new-account" onClick={() => changeScreen(true)}>Log In</button>
                    </form>
                }
            </div>
            <footer className="app-footer">
                &copy; 2021 - Fakebook is a vulnerable application for security tests.
            </footer>
        </div>
    )
}