import React from 'react'

import './CardProfile.scss';

type ProfileProps = {
    image: string | undefined;
    name: string | undefined;
    email: string | null |undefined;
}

export const CardProfile = ({image, name, email}:ProfileProps) => {
    return (
        <div>
            <img src={image} alt="Foto de perfil" />
            <strong>{name}</strong>
            <span>{email}</span>
        </div>
    )
}


