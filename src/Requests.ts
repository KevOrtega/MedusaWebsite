import axios from 'axios'

import { Clothing } from './interfaces'

export async function createClothing(clothing: Clothing) {
    return await axios.post('http://localhost:4000/clothes', clothing)
}

export async function getClothes() {
    return await axios.get('http://localhost:4000/clothes')
}

export async function updateClothing(clothing: Clothing, clothingID: number) {
    return await axios.put(`http://localhost:4000/clothes/${clothingID}`, clothing)
}

export async function deleteClothing(clothingID: number) {
    return await axios.delete(`http://localhost:4000/clothes/${clothingID}`)
}