import "../styles/header.css"
import logo from "../assets/argentBankLogo.png"
import {Link,NavLink} from "react-router-dom"

import {loggedOut} from "../services/store_actions.js"
import { useDispatch,useSelector } from 'react-redux';

function Header(){
    let name = useSelector(e => e.fname);
    
    const dispatch = useDispatch();

    if(name){
        return (
            <header>
                <Link to="/" className="logo"><img src={logo} alt="Argent Bank Logo"/></Link>
                <nav>
                    <ul>
                        <NavLink to="/profile" className='active_link'><i className="fa fa-user-circle user-icon"></i><li><span>i</span>{name}</li></NavLink>
                        <NavLink to="/" onClick={()=>{dispatch({...loggedOut})}} className='active_link'><i className="fa fa-sign-out user-icon"></i><li><span>i</span>Sign Out</li></NavLink>
                    </ul>
                </nav>
            </header>
        )
    }
    return (
        <header>
            <Link to="/" className="logo"><img src={logo} alt="Argent Bank Logo"/></Link>
            <nav>
                <ul>
                    <NavLink to="/login" className='active_link'><i className="fa fa-user-circle user-icon"></i><li><span>i</span>Sign In</li></NavLink>
                </ul>
            </nav>
        </header>
    )
}

export default Header;