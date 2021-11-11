import { useHistory } from 'react-router-dom';

import { Button } from '../../components/Button/Button';
import googleIcon from '../../assets/google-icon.svg';
import { useAuth } from '../../hooks/useAuth';

import './Signin.scss'


export const Signin = () => {
    const history = useHistory();
    const { user, signInWithGoogle } = useAuth();

    async function handleNavigationToHome() {
        if(!user){
            await signInWithGoogle();
        }

        history.push('/Home');
    }

    return (
        <section>
            <main>
                <div className="text">
                    Notícias de E-Sports a todo momento
                </div>
                <div className="button">
                    <Button
                        type="submit"
                        onClick={handleNavigationToHome}
                    >
                        <img src={googleIcon} alt="" />
                        Signin up
                    </Button>
                </div>
           </main>
        </section>
    )
}


