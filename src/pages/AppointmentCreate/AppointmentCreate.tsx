import { FormEvent, useState } from 'react'
import { Header } from '../../components/Header/Header'
import { database } from '../../services/firabase';
import './AppointmentCreate.scss'
import { useHistory } from 'react-router-dom';

export const AppointmentCreate = () => {
    const history = useHistory();
    const [title, settitle] = useState('');
    const [date, setDate] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('')


    async function handleCreatePost(event: FormEvent) {
        event.preventDefault()

        const postRef = database.ref('posts');

        const result = await postRef.push({
            title: title,
            date: date,
            image: image,
            description: description
        });
        
        history.push(`/home/${result}`);
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
                        type="text" 
                        placeholder="Digite o titulo do post"
                        onChange={event => settitle(event.target.value)}
                        value={title}
                    />
                    <input 
                        type="date"
                        onChange={event => setDate(event.target.value)}
                        value={date}
                    />
                    <input 
                        className="image-info" 
                        type="url" 
                        placeholder="Digite URL da imagem" 
                        onChange={event => setImage(event.target.value)}
                        value={image}
                    />
                    <textarea
                        onChange={event => setDescription(event.target.value)}
                        value={description}
                    />
                    <button type="submit">Create new post</button>
                </form>
            </div>
        </div>
    )
}


