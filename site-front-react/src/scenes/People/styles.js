import styled from 'styled-components'

export const Container = styled.div`
    background-color: #242526;
    border-radius: 20px;
    width: 80%;
    min-height: 500px;
    margin: 0 auto;
    margin-top: 50px;
    display: flex;
`

export const PersonCard = styled.div`
    border-radius: 10px;
    border: 1px solid #3f3f3f;
    margin: 10px;
    padding: 10px;
    display: flex; 
    align-items: center;
`

export const NickName = styled.span`
    font-weight: bold;
    color: rgb(228, 230, 235);
    font-size: 20px;
    margin-left: 10px;
    &:hover {
        cursor: pointer;
    }
`

export const PersonPhoto = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 10px;
`