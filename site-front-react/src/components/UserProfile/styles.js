import styled from 'styled-components'

export const UserProfileContainer = styled.div`
    background-color: #242526;
    background-image: linear-gradient(#0c0d0e, #242526);
`

export const CoverPhoto = styled.div`
    margin: 0 auto;
    width: 90%;
    height: 300px;
    border-radius: 0 0 20px 20px;
    overflow: hidden;
    > img {
        width: 100%;
        height: 100%;
    }
`

export const PerfilPhoto = styled.div`
    width: 180px;
    height: 160px;
    margin: 0 auto;
    margin-top: -120px;
    > img {
        border-radius: 50%;
        border: 5px solid #18191a44;
        width: inherit;
        height: inherit;
    }
`

export const PerfileUsername = styled.h3`
    color: white;
    font-family: Helvetica, Arial, sans-serif;
    text-align: center;
    font-size: 32px;
    margin-top: 20px;
`

export const Line = styled.div`
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
    border-bottom: 1px #848080 solid;
    width: 90%;
`