import React from 'react'

import { authService } from '../../services'
import { useDispatch } from 'react-redux'
import { userChanged } from '../../store/actions'

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
    Logo
} from './styles'


export function Toolbar() {

    const dispatcher = useDispatch()

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
                <ToolbarTab selected={true}>
                    <FaHome size={40} />
                </ToolbarTab>
                <ToolbarTab>
                    <FaUsers size={40} />
                </ToolbarTab>
            </ToolbarMain>
            <ToolbarRight>
                <div>
                    <ToolbarButton>
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