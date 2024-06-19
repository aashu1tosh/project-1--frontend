import { image } from "@config/constant/image"
import ThemeToggleButton from "@ui/common/atoms/ThemeToggleButton"
// import ThemeToggleButton from "@ui/common/atom/ThemeToggleButton"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav id='landing-page'>

            <div className="navbar-logo">
                <Link to='/'>
                    <img src={image?.logo} alt="Logo" />
                </Link>
            </div>


            <div className="navbar-links">
                <li><Link to='/login'>Login</Link></li>
                <li>Sign Up</li>
                <li><ThemeToggleButton /></li>
            </div>
        </nav>
    )
}

export default Navbar