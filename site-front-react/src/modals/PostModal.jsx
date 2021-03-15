import { FaCamera } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { hideModal } from '../store/actions'

import {
    PostContainer,
    CancelPostButton,
    CreatePostButton,
    PostTitle,
    PostText,
    InputUpload,
    Footer,
    OverlayContainer
} from './styles'

export function PostModal(props) {

    const dispatch = useDispatch()

    return (
        <OverlayContainer show={props.show}>
            <PostContainer>
                <PostTitle>New Post</PostTitle>
                <PostText required name="text" placeholder="What's on your mind?"></PostText>
                <InputUpload>
                    <button type="button" className="toolbar-btn">
                        <FaCamera />
                    </button>
                </InputUpload>
                <Footer>
                    <select>
                        <option value="0">Public</option>
                        <option value="1">Only Friends</option>
                    </select>
                    <CancelPostButton type="button" onClick={() => dispatch(hideModal())}>Cancel</CancelPostButton>
                    <CreatePostButton type="submit">Post</CreatePostButton>
                </Footer>
            </PostContainer>
        </OverlayContainer>
    )
}