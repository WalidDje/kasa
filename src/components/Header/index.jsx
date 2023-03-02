import Logo from '../../assets/LOGO.png'
import { Link } from 'react-router-dom';
import './style.css'

function Header() {
    return (
        <div>
            <nav className="navbar bg-light">
                <div className="navig-bar">
                    <Link to="/" className='logo'>
                        <img src={Logo} alt="Logo Kasa" />
                    </Link>
                    <div className='btn-navig'>
                        <Link to="/" className='btn-accueil'> Accueil </Link>
                        <Link to="/About" className='btn-apropos'> A propos </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;