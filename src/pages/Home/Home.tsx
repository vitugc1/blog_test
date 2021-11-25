import { useEffect, useState } from 'react';
import { firebase } from '../../services/firabase';

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

    

    return (
        <div className="Container-Home">
            <Header
                isChecked={false}
            />
            <div>
                
            </div>
            <div className="Posts">
            
            {post.map(posts => (
                    <div
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
            ))}
            </div>
        </div>
    )
}


