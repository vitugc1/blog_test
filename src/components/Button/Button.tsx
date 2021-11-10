import googleIconImg from '../../assets/google-icon.svg';

import './Button.scss'

type Props = {
    title: string;
}

export const Button = ({ title }: Props) => {
    return (
        <button type="submit">
            <img src={googleIconImg} alt="logo do google" />
            <span>{title}</span>
        </button>
    )
}


