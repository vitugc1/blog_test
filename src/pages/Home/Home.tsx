import { useHistory } from 'react-router'

import { usePost } from '../../hooks/usePost'
import { useAuth } from '../../hooks/useAuth'

import { CardPost } from '../../components/CardPost/CardPost'
import { CardProfile } from '../../components/CardProfile/CardProfile'
import { Header } from '../../components/Header/Header'

import './Home.scss'

export const Home = () => {
    const history = useHistory();
    const { posts } = usePost();
    const { user } = useAuth();
    
    function handleNavigationToDetailsPost(postsId: string) {
        const itemRef = posts.find(item => item.id === postsId)

        history.push(`/post/details/${itemRef?.id}`)
    }

    return (
        <main>
            <Header
                    isChecked={false}
            />
                
            <div>
                <div className="content-profile">
                    <CardProfile
                        image={user?.avatar}
                        name={user?.name}
                        email={user?.email}
                    />
                </div>
                    
                    <div className='content-list'>
                        {posts.map((item) => (
                            <div 
                                className="content-post"
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
        </main>
    )
}


