import { forwardRef, RefForwardingComponent, useCallback, useState, useImperativeHandle } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Button } from '../Button/Button';

import googleIconSvg from '../../assets/google-icon.svg';
import './modalLogin.scss';

export interface ModalHandles {
    openModal: () => void;
}

const ModalLogin: RefForwardingComponent<ModalHandles> = (props, ref) => {
    const { user, signInWithGoogle } = useAuth();
    const [modalLogin, setModalLogin] = useState(false);
    const history = useHistory();

    const openModal = useCallback(() => {
        setModalLogin(true);
    }, []);

    useImperativeHandle(ref, () => {
        return {
            openModal
        }
    });

    const handleCloseModla = useCallback(() => {
        setModalLogin(false);
    }, [])

    if(!modalLogin) {
        return null;
    }

    async function handleNavigationToHome() {
        if(!user){
            await signInWithGoogle();
        }

        
    }
    return (
        <div 
            className="conten-modal-login"
            onClick={handleCloseModla}
        >
            <Button
                type="submit"
                onClick={handleNavigationToHome}
                >
                    <img src={googleIconSvg} alt="" />
                    Signin up
            </Button>
        </div>
    )
}

export default forwardRef(ModalLogin);


