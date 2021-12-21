import { useHistory } from 'react-router'
import { CardPost } from '../../components/CardPost/CardPost'
import { Header } from '../../components/Header/Header'
import { usePost } from '../../hooks/usePost'

import './Home.scss'


export const Home = () => {
    const history = useHistory();
    const { posts } = usePost();
    
    function handleNavigationToDetailsPost(postsId: string) {
        const itemRef = posts.find(item => item.id === postsId)

        history.push(`/post/details/${itemRef?.id}`)
    }

    return (
        <div className="Container-Home">
            <div>
                <Header
                    isChecked={false}
                />
            </div>


            <section>
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
            </section>
        </div>
    )
}


