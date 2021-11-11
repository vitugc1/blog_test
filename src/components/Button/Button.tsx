import { ButtonHTMLAttributes } from 'react';

import './Button.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: ButtonProps) => {
    return (
        <button className="Button" {...props} />
    )
}


