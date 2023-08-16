import "../styles/header.css"
import {Link,NavLink} from "react-router-dom"

function Header(){
    return (
        <header>
            <Link to="/"><img src="assets/argentLogoLogo.png" alt="Argent Bank Logo"/></Link>
            <nav>
                <ul>
                    <NavLink to="/sign-in"><li>Sign In</li></NavLink>
                </ul>
            </nav>
        </header>
    )
}

export default Header;