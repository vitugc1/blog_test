import React from 'react'

import './CardPost.scss'

type Props = {
    urlImage: string;
    date: string;
    title: string;
    description: string;
}

export const CardPost = ({ urlImage, date, title, description}: Props) => {
    return (
        <div className="Card">
            <a  href="/DetailsPost">
                <div>
                    <img src={urlImage} alt="" />
                </div>
                <div>
                    <h3>{date}</h3>
                </div>
                <div>
                    <span>{title}</span>
                </div>
                <div>
                    <p>{description}</p>
                </div>
            </a>
        </div>
    )
}


