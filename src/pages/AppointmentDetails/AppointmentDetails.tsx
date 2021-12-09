import { useParams } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { useAuth } from '../../hooks/useAuth';
import { usePost } from '../../hooks/usePost';

type PostParms = {
    id: string;
}

export const AppointmentDetails = () => {
    const { user } = useAuth();
    const params = useParams<PostParms>();
    const postsId = params.id;
    const { posts } = usePost()

    const itemRef = posts.find(post => post.id === postsId);
    if(!user) {
        throw new Error('Faça login');
    }

    return (
        <div>
            <div>
                <Header
                    isChecked={true}
                />
            </div>
            <div>
                <img src={itemRef?.image} alt="" />
                <h1>{itemRef?.title}</h1>
                <p>{itemRef?.description}</p>
            </div>
        </div>
    )
}




