import { useEffect, useState } from 'react';
import { database } from '../services/firabase';

type PostCard = {
    id: string;
    title: string;
    date: string;
    image: string;
    description: string;
}


export const usePost = () => {
    const [posts, setPosts] =useState<PostCard[]>([]);
    
    useEffect(() => {
        const postsRef = database.ref(`posts`);
        
        postsRef.on('value', (snapshot) => {
            const databasePosts = snapshot.val();
            const parsedPost = Object.keys(databasePosts).map((key) => {
                return {
                    id: key,
                    title: databasePosts[key].title,
                    date: databasePosts[key].date,
                    image: databasePosts[key].image,
                    description: databasePosts[key].description
                }
            })
            setPosts(parsedPost);
        })
        
        return () => {
            postsRef.off('value');
        }

    }, []);

    return { posts };
}


