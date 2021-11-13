import { firebase } from '../../services/firabase';
import { useEffect, useState } from 'react'
import { Header } from '../../components/Header/Header'


import './AppointmentDetails.scss'

type PostCard ={
    id: string;
    title: string;
    date: string;
    image: string;
    description: string;
}

export const AppointmentDetails = (posts: string) => {
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
            console.log(parsedPost);
        })
    }, []);

    return (
        <div>
            <Header
                isChecked={true}
            />
            {post.map(posts => {
            <div 
                className="Details-info"
                key={posts.id}
            >
                <div>
                    <img src={posts.image} alt="" />
                </div>
                <div>
                    <span>{posts.title}</span>
                </div>
                <div>
                    <p>
                        {posts.description}
                    </p>
                </div>
            </div>
            })}
        </div>
    )
}


