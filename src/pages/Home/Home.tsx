import { useHistory } from 'react-router'
import { CardPost } from '../../components/CardPost/CardPost'
import { Header } from '../../components/Header/Header'
import { useAuth } from '../../hooks/useAuth'
import {  usePost } from '../../hooks/usePost'

import './Home.scss'


export const Home = () => {
    const { user } = useAuth();
    const history = useHistory();
    const { posts } = usePost()
    
    function handleNavigationToDetailsPost(id: string) {
        const itemRef = posts.find(item => item.id === id)

        history.push(`/post/details/${itemRef?.id}`)
    }

    if(!user) {
        throw new Error('Faça login');
    }

    return (
        <div className="Container-Home">
            <div>
                <Header
                    isChecked={false}
                />
            </div>


            <div className="Posts">
                {posts.map((item) => (
                    <div
                        className="Post"
                        key={item.id}
                        onClick={() => handleNavigationToDetailsPost(item.id)}
                    >
                        <CardPost
                                title={item.title}
                                image={item.image}
                                date={item.date}
                                description={item.description}
                        />
                        
                    </div>
                ))}
            </div>
        </div>
    )
}


