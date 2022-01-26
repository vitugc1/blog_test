import { useParams } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { usePost } from '../../hooks/usePost';

import './AppointmentDetails.scss';

type PostParms = {
    id: string;
}

export const AppointmentDetails = () => {
    const params = useParams<PostParms>();
    const postsId = params.id;
    const { posts } = usePost();

    const itemRef = posts.find(post => post.id === postsId);

    if(!itemRef) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <div>
                <Header
                    isChecked={true}
                />
            </div>
            <div className="content-details">
                <img src={itemRef?.image} alt="" />
                <h1>{itemRef?.title}</h1>
                <p>{itemRef?.description}</p>
            </div>
        </div>
    )
}




