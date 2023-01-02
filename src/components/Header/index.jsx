import Logo from '../../assets/LOGO.png'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <nav className="navbar bg-light">
                <div className="container-fluid d-flex mx-5">
                    <div className='d-flex justify-content-start'>
                        <img src={Logo} alt="Logo Kasa" />
                    </div>
                    <div className='d-flex justify-content-end'>
                        <Link to="/" className=' text-danger px-4'> Accueil </Link>
                        <Link to="/About" className=' text-danger px-4'> A propos </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;