import httpService from './http.service'

const getAll = () => httpService.get('/people')

const getById = id => httpService.get(`/people/${id}`)

const getFriends = () => httpService.get('/people/friends')

export default {
    getAll,
    getFriends,
    getById
}