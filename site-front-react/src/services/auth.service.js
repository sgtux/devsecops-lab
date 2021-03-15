import httpService from './http.service'

const getAccount = () => httpService.get('/account')

const login = user =>
    httpService.postNotAuthenticated('/account/login', user)
        .then(res => getAccount())
        .catch(err => { throw err })

const createAccount = account =>
    httpService.postNotAuthenticated('/account', account)
        .then(res => getAccount())
        .catch(err => { throw err })

const updateAccount = account => httpService.put('/account', account)

const logout = () => httpService.get('/account/logout')

export default {
    getAccount,
    login,
    createAccount,
    updateAccount,
    logout
}