import { useState } from 'react'

import { AddClothingForm } from './ClothingForm'

import styled from 'styled-components'

const AddClothingContainer = styled.div`
    width: 100%;
    margin-top: 1em;
    border-radius: 10px;
    background-color: #fff;
`

const AddClothingButton = styled.button`
    font-size: 3em;
    font-weight: bold;
    width: 100%;
    padding: 1em;
    outline: none;
    border: none;
    border-radius: inherit;
    background-color: #fff;
    text-align: center;
    cursor: pointer;
`

const AddClothingFormContainer = styled.div`
    width: 100%;
    margin-top: 1em;
    padding: 1em;
    border-radius: 0 0 10px 10px;
    background-color: #fafafa;
    box-shadow: 0 0 .1em #ccc;
`

function AddClothingComponent({AddClothingRequest}: {AddClothingRequest: Function}): JSX.Element {
    const [isAddSectionOn, setIsAddSectionOn] = useState<boolean>(false)

    function changeAddSectionState() {
        isAddSectionOn ?
        setIsAddSectionOn(false) :
        setIsAddSectionOn(true)
    }

    return (
        <AddClothingContainer>
            <AddClothingButton onClick={changeAddSectionState}>
                +
            </AddClothingButton>

            {isAddSectionOn && (
                <AddClothingFormContainer>
                    <AddClothingForm addClothingRequest={AddClothingRequest} changeComponentState={changeAddSectionState} />
                </AddClothingFormContainer>
            )}
        </AddClothingContainer>
    )
}

export default AddClothingComponent