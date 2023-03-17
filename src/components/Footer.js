import Logo from '../assets/images/Coding.png'
import '../sass/base/_footer_typography.scss'
import '../sass/layout/_footer.scss'

function Footer () {

    return (
        <footer>
            <img  src={Logo} alt='Coding logo footer' />
            <p>©2023 KrisCartel HOUSE. All rights reserved</p>
        </footer>)
}


export default Footer