
import { Header } from '../../components/Header/Header';
import { usePost } from '../../hooks/usePost';

export const AppointmentDetails = () => {
    const { posts } = usePost();

    const item = posts.find((post) => post);
    
        
    return (
        <div>
            <div>
                <Header
                    isChecked={true}
                />
            </div>
            <div>
                
            </div>
        </div>
    )
}




