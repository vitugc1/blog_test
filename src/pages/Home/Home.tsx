import { useHistory } from 'react-router-dom';

import { CardPost } from '../../components/CardPost/CardPost'
import { Header } from '../../components/Header/Header'

import './Home.scss'

export const Home = () => {
    const history = useHistory();

    const result = [
        {
            id: 1,
        },
        {
            id: 2,
        },
        {
            id: 3,
        },
        {
            id: 4,
        },
        {
            id: 5,
        },
        {
            id: 6,
        },
        {
            id: 7,
        },
        {
            id: 8,
        }
    ]

    function navigationToDetails(){
        history.push('/DetailsPost');
    }

    return (
        <div className="Container-Home">
            <Header
                isChecked={false}
            />
            <div className="Posts">
            {result.map(item => (
                <div 
                    onClick={navigationToDetails}
                    className="Post"
                    key={item.id}   
                >
                        <CardPost
                            
                            urlImage='https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?size=626&ext=jpg'
                            date="10.11.2021"
                            title="Jogos de Hoje"
                            description="Hoje teve um campeonato"
                        />
                </div>
                
            ))}
            </div>
        </div>
    )
}


