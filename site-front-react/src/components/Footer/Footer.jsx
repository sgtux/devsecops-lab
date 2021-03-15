import { useSelector } from 'react-redux'

import { FooterContainer } from './styles'

import { PostModal } from '../../modals/PostModal'

export function Footer() {

    const postModal = useSelector(state => state.appState.postModal)

    return (
        <FooterContainer>
            &copy; 2021 - Fakebook is a vulnerable application for security tests.
            <PostModal show={postModal} />
        </FooterContainer>
    )
}