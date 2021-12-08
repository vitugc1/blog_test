import { useHistory, useParams } from 'react-router'
import { CardPost } from '../../components/CardPost/CardPost'
import { Header } from '../../components/Header/Header'
import {  usePost } from '../../hooks/usePost'

import './Home.scss'



export const Home = () => {
    const history = useHistory();
    const { posts } = usePost()

    console.log(posts)
    
    function handleNavigationToDetailsPost() {
        const itemRef = posts.find(item => item.id)

        history.push(`/post/details/${itemRef?.id}`)

        
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
                        
                    >
                        <a 
                            onClick={handleNavigationToDetailsPost}
                        >
                            <CardPost
                                title={item.title}
                                image={item.image}
                                date={item.date}
                                description={item.description}
                            />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}


