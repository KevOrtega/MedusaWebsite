export type NewClothing = {
    title: string,
    description: string,
    price: number
}

export type Clothing = {
    title: string,
    description: string,
    price: number,
    _id: number
}

export type RequestsObject = {
    updateClothing: Function,
    deleteClothing: Function
}

export type ClothingComponentProps = {
    clothing: Clothing, 
    requests: RequestsObject
}

export type ClothingFormProps = {
    clothing: Clothing, 
    requests: RequestsObject,
    changeComponentState: Function
}

export type CustomStyles = {
    width?: string;
    height?: string;
    margin?: string;
    padding?: string;
}

export type ComponentProps = {
    children: React.ReactNode,
    customStyles?: CustomStyles
}

export type FormProps = {
    children: React.ReactNode,
    onSubmit: React.FormEventHandler<HTMLFormElement>
}

export interface TextProps extends ComponentProps {
    type?: 'p' | 'b'
}

export interface TitleProps extends ComponentProps {
    type?: 'h1' | 'h2' | 'h3'
}