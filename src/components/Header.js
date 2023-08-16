import "../styles/header.css"
import logo from "../assets/argentBankLogo.png"
import {Link,NavLink} from "react-router-dom"

function Header(){
    return (
        <header>
            <Link to="/" className="logo"><img src={logo} alt="Argent Bank Logo"/></Link>
            <nav>
                <ul>
                    <NavLink to="/sign-in" className='active_link'><i className="fa fa-user-circle user-icon"></i><li><span>i</span>Sign In</li></NavLink>
                </ul>
            </nav>
        </header>
    )
}

export default Header;