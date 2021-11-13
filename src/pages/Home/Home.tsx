import { useEffect, useState } from 'react';
import { firebase } from '../../services/firabase';
import { useHistory } from 'react-router-dom';

import { CardPost } from '../../components/CardPost/CardPost'
import { Header } from '../../components/Header/Header'

import './Home.scss'

type PostCard ={
    id: string;
    title: string;
    date: string;
    image: string;
    description: string;
}

export const Home = () => {
    const history = useHistory();
    const [post, setPost] =useState<PostCard[]>([]);

    useEffect(() => {
        const postsRef = firebase.database().ref('posts');

        postsRef.on('value', (snapshot) => {

            const posts = snapshot.val();
            const parsedPost = Object.keys(posts).map((key) => {
                return {
                    id: key,
                    title: posts[key].title,
                    date: posts[key].date,
                    image: posts[key].image,
                    description: posts[key].description
                }
            })
            setPost(parsedPost);
        })
    }, []);

    function navigationToDetails(){
        history.push(`/DetailsPost${CardPost}`);
    }

    return (
        <div className="Container-Home">
            <Header
                isChecked={false}
            />
            <div className="Posts">
            {post ? post.map(posts => (
                    <div
                        onClick={navigationToDetails}
                        className="Post"
                        key={posts.id}
                    >
                        <CardPost
                            title={posts.title}
                            urlImage={posts.image}
                            date={posts.date}
                            description={posts.description}
                            />
                    </div>
            )): ''}
            </div>
        </div>
    )
}


