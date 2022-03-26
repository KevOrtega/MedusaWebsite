import { useState } from 'react'

import { ClothingComponentProps } from '../interfaces'

import Close from '../atoms/Close'
import { UpdateClothingForm } from './ClothingForm'
import Text from '../atoms/Text'
import Title from '../atoms/Title'

import styled from 'styled-components'

const ClothingContainer = styled.div`
    position: relative;
    width: 100%;
    margin-top: 1em;
    border-radius: 10px;
    background-color: #fff;
`

const ClothingButton = styled.button`
    width: 100%;
    height: 100%;
    padding-top: 1em;
    outline: none;
    border: none;
    border-radius: inherit;
    background-color: #fff;
    cursor: pointer;
`

const EditClothingContainer = styled.div`
    width: 100%;
    margin-top: 1em;
    padding: 1em;
    border-radius: 0 0 10px 10px;
    background-color: #fafafa;
    box-shadow: 0 0 .1em #ccc;
`

const ClothingInfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1.5em 0 1em;
    padding: 1em;
`

function ClothingComponent({clothing, requests}: ClothingComponentProps): JSX.Element {
    const [isEditSectionOn, setIsEditSectionOn] = useState<boolean>(false)

    function changeEditSectionState() {
        isEditSectionOn ?
        setIsEditSectionOn(false) :
        setIsEditSectionOn(true)
    }

    return (
        <ClothingContainer>
            <Close title="eliminar" onClick={() => requests.deleteClothing(clothing['_id'])}>
                X
            </Close>
            <ClothingButton onClick={changeEditSectionState}>

                <Title type="h3">{clothing.title}</Title>

                <ClothingInfoContainer>
                    <Text customStyles={{width:'60%'}}>{clothing.description}</Text>
                    <Text type="b">${clothing.price}</Text>
                </ClothingInfoContainer>
            </ClothingButton>
 
            {isEditSectionOn && (
                <EditClothingContainer>
                    <UpdateClothingForm clothing={clothing} requests={requests} changeComponentState={changeEditSectionState} />
                </EditClothingContainer>
            )}
        </ClothingContainer>
    )
}

export default ClothingComponent