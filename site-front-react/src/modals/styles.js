import styled from 'styled-components'

const Button = styled.button`
    border: none;
    padding: 10px;
    border-radius: 6px;
    color: white;
    font-size: 20px;
    font-family: Helvetica, Arial, sans-serif;
    font-weight: 700;
    transition: 200ms;
    &:hover {
        cursor: pointer;
        opacity: .9;
    }
`

export const CreatePostButton = styled(Button)`
    background-color: #2d88ff;
`

export const CancelPostButton = styled(Button)`
    color: #504f4f;
    background-color: white;
`

export const PostContainer = styled.form`
    background-color: #242526;
    width: 400px;
    height: 360px;
    margin: 0 auto;
    border-radius: 10px;
    color: white;
    margin-top: 80px;
    padding: 20px;
`

export const PostTitle = styled.div`
    font-size: 20px;
    width: 90%;
    text-align: center;
    padding-bottom: 20px;
    font-weight: bold;
    border-bottom: 1px #504f4f solid;
    margin: 0 auto;
`

export const PostText = styled.textarea`
    background-color: rgba(0,0,0,0);
    width: 90%;
    height: 180px;
    resize: none;
    border: none;
    color: white;
    font-size: 24px;
    margin-left: 20px;
`

export const InputUpload = styled.div`
    text-align: center;
    border-bottom: 1px #504f4f solid;
    border-top: 1px #504f4f solid;
    padding: 20px;
`

export const Footer = styled.div`
    text-align: end;
    margin-top: 10px;
`

export const OverlayContainer = styled.div`
    background-color: #000000c2;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: ${props => props.show ? 'block' : 'none'};
`