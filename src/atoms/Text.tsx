import { TextProps } from '../interfaces'

import styled from 'styled-components'

const P = styled.p`
    font-size: 1.5em;
    text-align: left;
`

const B = styled.b`
    font-size: 1.5em;
    text-align: left;
`

function Text({children, customStyles, type}: TextProps): JSX.Element {
    const text_elements = {
        p: <P children={children} style={customStyles} />,
        b: <B children={children} style={customStyles} />
    }

    return text_elements[type || 'p']
}

export default Text