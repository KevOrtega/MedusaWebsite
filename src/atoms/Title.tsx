import { TitleProps } from '../interfaces'

import styled from 'styled-components'

const H1 = styled.h1`
    font-size: 4em;
`

const H2 = styled.h2`
    font-size: 3em;
`

const H3 = styled.h3`
    font-size: 2em;
`

function Title({children, customStyles, type}: TitleProps): JSX.Element {
    const title_elements = {
        h1: <H1 children={children} style={customStyles} />,
        h2: <H2 children={children} style={customStyles} />,
        h3: <H3 children={children} style={customStyles} />
    }

    return title_elements[type || 'h1']
}

export default Title