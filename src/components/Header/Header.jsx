import {Link}  from 'react-router-dom'
import './Header.css'
const Header = () => {
    return(
        <div className='Header1'>
            <header>
                <nav>
                    <a className='navbar'>Vivkanand college</a>
                    <Link to={"/home"} className='nav'>Home</Link>
                    <Link to={"/about"} className='nav'>AboutPage</Link>
                    <Link to={"/contact"} className='nav'>ContactUs</Link>
                    <Link to={"/courses"}className='nav'>CoursesPage</Link>
                    <Link to={"/Admission"}className='nav-item'>Apply now!</Link>
                 </nav>
            </header>

        </div>
    )
}

export default Header;