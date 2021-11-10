import React from 'react';
import { Avatar } from '../Avatar/Avatar';
import './Header.scss';

type Props = {
    isChecked: boolean;
}

export const Header = ({ isChecked }:Props) => {
    return (
        <div className="container">
            <Avatar
                urlImage="https://github.com/vitugc1.png"
            />
            <div />
            <div>
               { isChecked ? <a href="/home">Home</a> : '' }
            </div>
        </div>
    )
}


