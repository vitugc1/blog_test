import { InputHTMLAttributes, RefForwardingComponent, forwardRef } from 'react'
import { useField } from '@unform/core'

type Props = {
    type: string | File;
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & Props;

type RefProps = RefForwardingComponent<HTMLInputElement, InputProps> ;

const Input: RefProps = ({type, ...rest}, ref) => {

    return (
        <input
            ref={ref}
            type={type}
            {...rest}
        />
    )
}

export default forwardRef(Input);

