import styled from 'styled-components'
import ClothesList from '../molecules/ClothesList'

const Main = styled.main`
    display: flex;
    height: 100vh;
    width: 100%;
`

function RootPage(): JSX.Element {
    return (
        <Main>
            <ClothesList />
        </Main>
    )
}

export default RootPage