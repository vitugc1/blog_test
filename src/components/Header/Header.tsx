import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth';
import { Avatar } from '../Avatar/Avatar';
import './Header.scss';

type Props = {
    isChecked: boolean;
}

export const Header = ({ isChecked }:Props) => {
    const { user } = useAuth();
 
    return (
        <div className="content-header">
            <div className="content-avatar">
                <Avatar
                    urlImage={user?.avatar}
                />

                <div>
                    Olá,
                    <span> {user?.name}</span>
                </div>
                
                     
            </div>
            
            <div className="content-ancoras">
                
                { isChecked ? <Link className="ancora-1" to="/home">Home</Link> : <Link className="ancora-1" to="/post/create">Criar Post</Link> } 
            </div>
            
        </div>
    )
}


