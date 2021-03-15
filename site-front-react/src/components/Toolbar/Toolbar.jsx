import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { authService } from '../../services'
import { userChanged, toolbarTabChanged, showPostModal } from '../../store/actions'

import {
    FaHome,
    FaUsers,
    FaPlus,
    FaComments,
    FaBell,
    FaSignOutAlt
} from 'react-icons/fa'

import {
    ToolbarContainer,
    ToolbarMain,
    ToolbarTab,
    ToolbarRight,
    ToolbarButton,
    ToolbarUserPhoto,
    Logo
} from './styles'


export function Toolbar() {

    const dispatcher = useDispatch()

    const user = useSelector(state => state.appState.user)
    const tabIndex = useSelector(state => state.appState.tabIndex)

    const history = useHistory()

    function toPage(index) {
        if (index !== tabIndex) {
            dispatcher(toolbarTabChanged(index))
            switch (index) {
                case 0:
                    history.push('/')
                    break
                case 1:
                    history.push('/people')
                    break
                default:
                    break
            }
        }
    }

    function toProfile() {
        history.push(`/profile/${user.id}`)
        toolbarTabChanged(-1)
    }

    function logout() {
        authService.logout()
            .then(() => dispatcher(userChanged(null)))
    }

    return (
        <ToolbarContainer>
            <div style={{ flex: 1 }}>
                <Logo src="fakebook-icon.png" />
            </div>
            <ToolbarMain>
                <ToolbarTab onClick={() => toPage(0)} selected={tabIndex === 0}>
                    <FaHome size={40} />
                </ToolbarTab>
                <ToolbarTab onClick={() => toPage(1)} selected={tabIndex === 1}>
                    <FaUsers size={40} />
                </ToolbarTab>
            </ToolbarMain>
            <ToolbarRight>
                <div>
                    <ToolbarUserPhoto src={`img/${user.perfilPhoto || 'default-profile-picture.png'}`} onClick={() => toProfile()} />
                    <ToolbarButton onClick={() => dispatcher(showPostModal())}>
                        <FaPlus />
                    </ToolbarButton>
                    <ToolbarButton>
                        <FaComments />
                    </ToolbarButton>
                    <ToolbarButton>
                        <FaBell />
                    </ToolbarButton>
                    <ToolbarButton onClick={() => logout()}>
                        <FaSignOutAlt />
                    </ToolbarButton>
                </div>
            </ToolbarRight>
        </ToolbarContainer>
    )
}