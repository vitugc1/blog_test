import { useHistory } from 'react-router-dom';

import { Button } from '../../components/Button/Button';
import { useAuth } from '../../hooks/useAuth';

import googleIcon from '../../assets/google-icon.svg';
import bannerSvg from '../../assets/banner.svg';
import logoSvg from '../../assets/logo.svg';

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
            <aside>
                <img src={bannerSvg} alt="" />
                <strong>Crie seus posts para o mundo todo.</strong>
            </aside>

            <div className="content">
                <div className="logo">
                    <img src={logoSvg} alt="" />
                </div>
                <div className="text">
                    <div>Bem-vindo, faça seu login e comece a criar seus posts.</div>
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
            </div>
        </section>
    )
}


