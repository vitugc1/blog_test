import React from 'react'
import { Button } from '../../components/Button/Button';

import './Signin.scss'

export const Signin = () => {
    return (
        <section>
            <main>
                <div className="text">
                    Notícias de E-Sports a todo momento
                </div>
                <div className="button">
                    <Button
                        title="signin up"
                    />
                </div>
           </main>
        </section>
    )
}


