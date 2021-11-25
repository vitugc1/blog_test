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
                Olá, {user?.name}
            </div>
            
            <div className="content-ancoras">
                
                { isChecked ? <a href="/home">Home</a> : <a href="/createpost">Create Post</a> } 
            </div>
            
        </div>
    )
}


