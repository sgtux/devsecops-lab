import React, { useState } from 'react'
import './Auth.css'

export function Auth() {

    const [nick, setNick] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const [isLogin, setIsLogin] = useState(true)

    function login(e) {
        e.preventDefault()
        console.log('login')
    }

    function createAccount(e) {
        e.preventDefault()
        console.log('createAccount')
    }

    return (
        <div>
            <div className="container-account">
                <div className="container-title">
                    <h1 className="account-title">fakebook</h1>
                    <h3 className="account-subtitle">Connect with friends and the world around you on Fakebook.</h3>
                </div>
                {isLogin ?
                    <form className="account-form-container" onSubmit={e => login(e)}>
                        <input type="text" name="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /><br />
                        <input type="password" name="senha" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                        <button type="button" className="btn btn-login" onClick={e => login(e)}>Log In</button>
                        <a href="//#endregion" className="lk-forget-password">Forget Password?</a>
                        <div className="line"></div>
                        <button type="button" className="btn btn-new-account" onClick={() => setIsLogin(false)}>Create New Account</button>
                    </form>
                    :
                    <form className="account-form-container" onSubmit={e => createAccount(e)}>
                        <input type="text" name="nick" value={nick} placeholder="Nick" onChange={e => setNick(e.target.value)} /><br />
                        <input type="text" name="email" value={email} placeholder="Email" onChange={e => setEmail(e.target.value)} /><br />
                        <input type="password" name="password" value={password} placeholder="Password" onChange={e => setPassword(e.target.value)} />
                        <input type="password" name="confirm" value={confirm} placeholder="Confirm Password" onChange={e => setConfirm(e.target.value)} />
                        <button type="button" className="btn btn-login" onClick={e => createAccount(e)}>Create</button>
                        <div className="line"></div>
                        <button type="button" className="btn btn-new-account" onClick={() => setIsLogin(true)}>Log In</button>
                    </form>
                }
            </div>
            <footer className="app-footer">
                &copy; 2021 - Fakebook is a vulnerable application for security tests.
            </footer>
        </div>
    )
}