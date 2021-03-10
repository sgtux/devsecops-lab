import axios from 'axios'

const urlApi = "http://localhost:5000/"

import axios from 'axios'
import { storageService } from './'

const getToken = () => localStorage.getItem('TOKEN')

const sendRequest = (method, url, headers, data) => {
    return axios({
        method: method,
        headers: headers,
        url: url,
        data: data
    }).then(res => res.data)
        .catch(err => {
            const { data } = err.response
            throw data
        })
}

const getHeaders = () => ({ token: getToken() })

const service = {
    getToken,
    getNotAuthenticated: url => sendRequest('get', `/api${url}`),
    postNotAuthenticated: (url, body) => sendRequest('post', `/api${url}`, null, body),
    get: url => sendRequest('get', `/api${url}`, getHeaders()),
    post: (url, body) => sendRequest('post', `/api${url}`, getHeaders(), body),
    put: (url, body) => sendRequest('put', `/api${url}`, getHeaders(), body),
    delete: (url, body) => sendRequest('delete', `/api${url}`, getHeaders(), body)
}

export default service