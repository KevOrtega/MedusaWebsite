import styled from 'styled-components'

const Close = styled.button`
    font-size: 1.5em;
    position: absolute;
    top: .5em;
    right: 1em;
    outline: none;
    border: none;
    background-color: #fff;
    cursor: pointer;

    :hover {
        opacity: .3;
        transition: opacity .2s;
    }
`

export default Close