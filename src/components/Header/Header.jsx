import {Link}  from 'react-router-dom'
const Header = () => {
    return(
        <div>
            <header>
                <nav>
                    <Link to={"/home"}>Home</Link>
                    <Link to={"/about"}>AboutPage</Link>
                    <Link to={"/contact"}>contactUs</Link>
                    <Link to={"/courses"}>CoursesPage</Link>
                    <Link to={"/Admission"}>AdmissionPage</Link>
                 </nav>
            </header>

        </div>
    )
}

export default Header;