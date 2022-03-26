import { useEffect, useState } from 'react'

import { Clothing } from '../interfaces'
import * as Requests from '../Requests'

import ClothingComponent from './Clothing'
import AddClothingComponent from './AddClothingComponent'

import styled from 'styled-components'

const ClothesListContainer = styled.div`
    align-self: center;
    display: flex;
    flex-direction: column-reverse;
    width: 50%;
    margin: auto;
    padding: 2em;
    background-color: #fafafa;
`

function ClothesList(): JSX.Element {
    const [clothesList, setClothesList] = useState<Clothing[]>([])

    useEffect(() => {
        loadClothes()
    }, [])

    async function createClothing(clothing: Clothing) {
        await Requests.createClothing(clothing)
        loadClothes()
    }

    async function loadClothes() {
        const clothes_list = await Requests.getClothes()
        setClothesList(clothes_list.data)
    }

    async function deleteClothing(id: number) {
        await Requests.deleteClothing(id)
        loadClothes()
    }

    async function updateClothing(clothing: Clothing, id: number) {
        await Requests.updateClothing(clothing, id)
        loadClothes()
    }

    return (
        <ClothesListContainer>
            {clothesList.map((clothing: Clothing, key: number) => (
                <ClothingComponent clothing={clothing} 
                requests={{deleteClothing, updateClothing}} key={`clothes ${key}`} />
            ))}
            <AddClothingComponent AddClothingRequest={createClothing} />
        </ClothesListContainer>
    )
}

export default ClothesList