import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { peopleService } from '../../services'

import { Container, PersonCard, NickName, PersonPhoto } from './styles'
import { toolbarTabChanged } from '../../store/actions'

export function People() {

    const [people, setPeople] = useState([])

    const [group1, setGroup1] = useState([])
    const [group2, setGroup2] = useState([])

    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {
        peopleService.getAll()
            .then(res => {
                const count = res.length
                const mean = Math.ceil(count / 2)
                setGroup1(res.slice(0, mean))
                setGroup2(res.slice(mean))
                setPeople(res)
            })
    }, [])

    function toProfile(id) {
        history.push(`/profile/${id}`)
        dispatch(toolbarTabChanged(-1))
    }

    return (
        <Container>
            <div style={{ flex: 1 }}>
                {group1.map((p, i) =>
                    <PersonCard>
                        <PersonPhoto src={`img/${p.perfilPhoto}`} />
                        <NickName onClick={() => toProfile(p.id)}>{p.nick}</NickName>
                    </PersonCard>)
                }
            </div>
            <div style={{ flex: 1 }}>
                {group2.map((p, i) =>
                    <PersonCard>
                        <PersonPhoto src={`img/${p.perfilPhoto}`} />
                        <NickName onClick={() => toProfile(p.id)}>{p.nick}</NickName>
                    </PersonCard>)
                }
            </div>
        </Container>
    )
}