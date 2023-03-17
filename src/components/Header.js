import Logo from '../assets/images/Coding.png'
import { Link } from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react'
import '../sass/base/_header_typography.scss'
import '../sass/layout/_header.scss'



function Header () {

    const [nav, setNav] = useState(false)

    function handleClick (){
        setNav(!nav)
    }

    window.addEventListener('scroll', function(){
        let header = document.querySelector('header')
        header.classList.toggle('sticky', window.scrollY > 0)
    })

    return (
        <header className='header'>
            <div className='top--image'>
                <img  src={Logo} alt='Coding logo' />
                <span className='sina-s'>Sina S. K.</span>
            </div>

            <nav className={ nav ? 'navigation active' : 'navigation'}>
                <ul>
                    <li className='first-child'>
                        <Link to='/#about' spy={true} smooth={true} offset={-130} duration={500}>About</Link>
                    </li>

                    <li className='second-child'>
                        <Link to='/#projets' spy={true} smooth={true} offset={-140} duration={500}>Projets</Link>
                    </li>
                </ul>
            </nav>
            <div className='toggle' onClick={handleClick}>
                    {nav ? (<FaTimes size={20} style={{color: '#f8f8f8'}} />) : (<FaBars size={20} style={{color: '#f8f8f8'}}/>)}
                </div>
        </header>
    )
}


export default Header