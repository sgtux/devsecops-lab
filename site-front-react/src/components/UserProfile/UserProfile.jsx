import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { peopleService } from '../../services'

import {
    CoverPhoto,
    PerfilPhoto,
    UserProfileContainer,
    PerfileUsername,
    Line
} from './styles'

export function UserProfile() {

    const [user, setUser] = useState({})

    const { id } = useParams()

    useEffect(() => {
        peopleService.getById(id)
            .then(res => setUser(res))
    }, [])

    return (
        <UserProfileContainer>
            <div>
                <CoverPhoto>
                    <img alt="" src={`img/${user.coverPhoto || 'default-cover-picture.jpg'}`} />
                </CoverPhoto>
            </div>

            <div>
                <PerfilPhoto>
                    <img alt="" src={`img/${user.perfilPhoto || 'default-profile-picture.png'}`} />
                </PerfilPhoto>
            </div>
            <PerfileUsername>{user.nick}</PerfileUsername>
            <Line />
            <br />
        </UserProfileContainer>
    )
}
