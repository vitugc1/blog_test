import React from 'react'
import { Header } from '../../components/Header/Header'

import './AppointmentDetails.scss'

export const AppointmentDetails = () => {
    return (
        <div>
            <Header
                isChecked={true}
            />
            <div className="Details-info">
                <div>
                    <img src="https://academia.r.worldssl.net/uploads/default/resized/csgo-natus-vincere-e-campea-do-pgl-major-stockholm-2021_646_380_HOME_BOX.jpg" alt="" />
                </div>
                <div>
                    <span>Major de CSGO 2021</span>
                </div>
                <div>
                    <p>
                        A Natus Vincere venceu a G2 Esports, neste domingo (7), e se sagrou campeã do PGL Major Stockholm 2021, torneio mundial de Counter-Strike: Global Offensive (CS:GO). Essa também foi a primeira vez na história que a equipe do astro Oleksandr "s1mple" Kostyliev, um dos melhores jogadores de CS:GO de todos os tempos, levantou a taça de um Major. A competição foi decidida em uma série melhor de três partidas (MD3) em que a Na'Vi foi superior no duelo e chegou à vitória por 2–0, parciais de 16–11, na Ancient, e 22–19, na Nuke. 
                    </p>
                </div>
            </div>
        </div>
    )
}


