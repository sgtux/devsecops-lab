import React from 'react'

import {
    CoverPhoto,
    PerfilPhoto,
    UserProfileContainer,
    PerfileUsername,
    Line
} from './styles'

export function UserProfile() {
    return (
        <UserProfileContainer>
            <div>
                <CoverPhoto>
                    <img alt="" src="http://localhost:5000/img/naruto-cover.jpg" />
                </CoverPhoto>
            </div>

            <div>
                <PerfilPhoto>
                    <img alt="" src="http://localhost:5000/img/naruto-perfil.jpg" />
                </PerfilPhoto>
            </div>
            <PerfileUsername>Naruto Uzumaki</PerfileUsername>
            <Line />
            <br />
        </UserProfileContainer>
    )
}
