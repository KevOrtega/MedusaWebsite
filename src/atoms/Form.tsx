import { FormProps } from '../interfaces'

function Form({children, onSubmit}: FormProps): JSX.Element {
    return <form action="" onSubmit={onSubmit}>{children}</form>
}

export default Form