import {useNavigate} from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import	'../sass/pages/_error.scss'




function Error() {
    const navigate = useNavigate()

    const handleClick = () => {
     navigate('/', {replace: true});
    //navigate.push('/')
   }

  return (
    <div className='parent'>
        <div className='content'>
            <Header />
            <main>
                <h1>404</h1>
                <p>
                    Oups! La page que vous demandez n'existe pas.
                </p>
                <a href='/' onClick={handleClick}>
                    Retourner sur la page d’accueil
                </a>
            </main>
        </div>
        <Footer />
    </div>

  )
}

export default Error