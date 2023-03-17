import { Link } from 'react-router-dom';
import { useFetch } from '../datas/useFetch';
import Error from '../page/ErrorData'
import Loader from '../components/Loader'
import '../sass/pages/_projets.scss'



function Projets () {
    const { data, isLoading, error } = useFetch(`http://localhost:8000/api/projet`)
    let projet = Object.values(data)

    if(error)return <Error />;

    return (
        <div className="projets">
           <div className='projet--flex'>
                <h2 id='/#projets'>Projets</h2>
                {isLoading ?
                    <Loader />
                    :
                    <section>
                        {projet.map((projet, index) => (
                                <div className='projet' key={`${projet.id}-${index}`}>
                                    <div className='image__projet'>
                                        <img src={projet.cover} alt={projet.alt}/>
                                    </div>
                                    <div className='text__projet'>
                                        <span>{projet.name.toUpperCase()}</span>
                                        <p>{projet.comment}</p>
                                        <button type='button' className='button' id='button'>
                                            <Link to={projet.src} target="_blank" >
                                                Voir ce projet sur Github
                                            </Link>
                                    </button>
                                    </div>
                                </div>
                            ))}
                    </section>
                }
           </div>
        </div>
    );
};



export default Projets;