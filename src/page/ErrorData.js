import {useNavigate} from 'react-router-dom';
import '../sass/pages/_error.scss'


const ErrorData = () => {
    const navigate = useNavigate()

    const handleClick = () => {
    navigate.push('/')
   }
    return (
        <div className='content'>
            <main>
                <h1>500</h1>
                <p>
                   Something went wrong with the server.
                </p>
                <a href='/' onClick={handleClick}>
                    Retourner sur la page d’accueil
                </a>
            </main>
        </div>
    );
};




export default ErrorData;