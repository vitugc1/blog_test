import { useAuth } from '../../hooks/useAuth';
import { Avatar } from '../Avatar/Avatar';
import './Header.scss';

type Props = {
    isChecked: boolean;
}

export const Header = ({ isChecked }:Props) => {
    const { user } = useAuth();
 
    return (
        <div className="container">
            <Avatar
                urlImage={user?.avatar}
            />
            <div />
            <div>
               { isChecked ? <a href="/home">Home</a> : '' }
            </div>
        </div>
    )
}


