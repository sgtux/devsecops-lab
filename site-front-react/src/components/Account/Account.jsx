import React from 'react'

export function Account() {

    return (
        <div class="container-account">
            <div class="container-title">
                <h1 class="account-title">fakebook</h1>
                <h3 class="account-subtitle">Connect with friends and the world around you on Facebook.</h3>
            </div>
            <form asp-controller="Account" asp-action="Login" class="account-form-container">
                <input name="email" type="text" placeholder="Email" /><br />
                <input type="password" name="password" type="text" placeholder="Password" /><br />
                <button type="submit" class="btn btn-login">Log In</button>
                <a class="lk-forget-password">Forget Password?</a>
                <div class="line"></div>
                <button type="button" class="btn btn-new-account">Create New Account</button>
            </form>
        </div>
    )
}