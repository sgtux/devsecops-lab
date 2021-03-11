import httpService from './http.service'

const updateToken = token => localStorage.setItem('TOKEN', token)
const getAccount = () => httpService.get('/account')

const login = user =>
    httpService.postNotAuthenticated('/account/login', user)
        .then(res => getAccount())
        .catch(err => { throw err })

const createAccount = account =>
    httpService.postNotAuthenticated('/account', account)
        .then(res => {
            updateToken(res.token)
            return getAccount()
        }).catch(err => { throw err })

const updateAccount = account => httpService.put('/account', account)

const logout = () => httpService.get('/account/logout')

export default {
    getAccount,
    login,
    createAccount,
    updateAccount,
    logout
}