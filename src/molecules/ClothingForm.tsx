import { useState } from "react"

import { Clothing, ClothingFormProps, NewClothing } from "../interfaces"

import Form from "../atoms/Form"

export function AddClothingForm({addClothingRequest, changeComponentState}: {addClothingRequest: Function, changeComponentState: Function}): JSX.Element {
    const [clothing, setClothing] = useState<NewClothing>({
        title: '',
        description: '',
        price: 0
    })

    async function addClothing() {
        await addClothingRequest(clothing)
    }

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        addClothing()
        changeComponentState()
    }

    return (
        <Form onSubmit={onSubmit}>
            <input type="text" placeholder="Título" style={{
                width: '100%',
                margin: '.3em',
                padding: '1em',
                border: 'none',
                borderRadius: '5px',
                outline: 'none'
            }}
            onChange={(e) => setClothing({...clothing, title: e.target.value})} />

            <input type="text" placeholder="Descripción" style={{
                width: '100%',
                margin: '.3em',
                padding: '1em',
                border: 'none',
                borderRadius: '5px',
                outline: 'none'
            }}
            onChange={(e) => setClothing({...clothing, description: e.target.value})} />

            <input type="number" placeholder="Precio" style={{
                width: '100%',
                margin: '.3em',
                padding: '1em',
                border: 'none',
                borderRadius: '5px',
                outline: 'none'
            }}
            onChange={(e) => setClothing({...clothing, price: Number(e.target.value)})} />

            <button
            type="submit"
            style={{
                fontSize: '1.3em',
                fontWeight: 'bold',
                width: '100%',
                margin: '.3em',
                padding: '1em',
                border: 'none',
                borderRadius: '5px',
                outline: 'none',
                backgroundColor: '#333',
                color: '#fff',
                textTransform: 'uppercase',
                cursor: 'pointer'
            }}>
                Guardar
            </button>
        </Form>
    )
}

export function UpdateClothingForm({clothing, requests, changeComponentState}: ClothingFormProps): JSX.Element {
    const [product, setProduct] = useState<Clothing>(clothing)

    async function updateProduct() {
        await requests.updateClothing(product, clothing['_id'])
    }

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        updateProduct()
        changeComponentState()
    }

    return (
        <Form onSubmit={onSubmit}>
            <input type="text" placeholder="Título" style={{
                width: '100%',
                margin: '.3em',
                padding: '1em',
                border: 'none',
                borderRadius: '5px',
                outline: 'none'
            }}
            onChange={(e) => setProduct({...product, title: e.target.value})} />

            <input type="text" placeholder="Descripción" style={{
                width: '100%',
                margin: '.3em',
                padding: '1em',
                border: 'none',
                borderRadius: '5px',
                outline: 'none'
            }}
            onChange={(e) => setProduct({...product, description: e.target.value})} />

            <input type="number" placeholder="Precio" style={{
                width: '100%',
                margin: '.3em',
                padding: '1em',
                border: 'none',
                borderRadius: '5px',
                outline: 'none'
            }}
            onChange={(e) => setProduct({...product, price: Number(e.target.value)})} />

            <button
            type="submit"
            style={{
                fontSize: '1.3em',
                fontWeight: 'bold',
                width: '100%',
                margin: '.3em',
                padding: '1em',
                border: 'none',
                borderRadius: '5px',
                outline: 'none',
                backgroundColor: '#333',
                color: '#fff',
                textTransform: 'uppercase',
                cursor: 'pointer'
            }}>
                Guardar
            </button>
        </Form>
    )
}