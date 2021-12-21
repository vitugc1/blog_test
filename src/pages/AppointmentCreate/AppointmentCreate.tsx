import { FormEvent, useRef } from 'react'
import { useHistory } from 'react-router-dom';
import { database } from '../../services/firabase';

import { Header } from '../../components/Header/Header'
import { useAuth } from '../../hooks/useAuth';

import './AppointmentCreate.scss'

export const AppointmentCreate = () => {
    const history = useHistory();
    const { user } = useAuth();
    const titleInputRef = useRef<HTMLInputElement>(null);
    const imageInputRef = useRef<HTMLInputElement>(null);
    const dateInputRef = useRef<HTMLInputElement>(null);
    const descriptionTextAreaRef = useRef<HTMLTextAreaElement>(null);



    async function handleCreatePost(event: FormEvent){
        event.preventDefault();

        const postRef = database.ref('posts');

        const firebasePost = await postRef.push({
            title: titleInputRef.current?.value,
            image: imageInputRef.current?.value,
            date: dateInputRef.current?.value,
            description: descriptionTextAreaRef.current?.value,
        });

        history.push(`/post/details/${firebasePost.key}`);
    }

    

    return (
        <div>

            <Header
                isChecked={true}
            />

        <div className="form-info">
            <form 
                onSubmit={handleCreatePost}
                
            >
                <input
                    ref={titleInputRef}
                    type="text" 
                    placeholder="Digite o título do post"
                />

                <input
                    ref={imageInputRef}
                    type="url" 
                    placeholder="Digite a url da imagem"
                />

                <div>
                    <input
                        ref={dateInputRef}
                        type="date"
                        placeholder="Digite a data do post"
                    />
                </div>

                <textarea
                    ref={descriptionTextAreaRef}
                    placeholder="Digite a descrição do post"
                />
                

                <button
                    disabled={!user}
                    type="submit"
                >
                    Criar post
                </button>

            </form>
        </div>
    </div>
    )
};




