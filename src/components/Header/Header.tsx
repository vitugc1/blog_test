import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth';

import { Avatar } from '../Avatar/Avatar';
import logoSvg from '../../assets/logo.svg';

import './Header.scss';

type Props = {
    isChecked: boolean;
}

export const Header = ({ isChecked }:Props) => {
    const { user } = useAuth();
 
    return (
        <div className="content-header">

            <div className="content-logo">
                <img src={logoSvg} alt="" />
                <span>E-sports</span>
            </div>


            <div className="content">
                <div className="content-ancoras">
                { isChecked ? <Link className="ancora-1" to="/home">Home</Link> : <Link className="ancora-1" to="/post/create">Criar Post</Link> } 
                
                </div>

                <div className="content-user">
                    {!user ? (
                        <Link className="ancora-2" to="/">Login</Link>
                    ) : (
                        
                        <Avatar
                            urlImage={user?.avatar}
                        />
                    )}
                </div>

            </div>
        </div>
    )
}


