
import { Header } from '../../components/Header/Header'

import './AppointmentCreate.scss'

export const AppointmentCreate = () => {
    return (
        <div>
            <Header
                isChecked={true}
            />
            <div className="form-info">
                <form action="">
                    <input type="text" placeholder="Digite o titulo do post" />
                    <input type="date" />
                    <input className="image-info" type="file" placeholder="Procurar" />
                    <textarea></textarea>
                    <button type="submit">Create new post</button>
                </form>
            </div>
        </div>
    )
}


