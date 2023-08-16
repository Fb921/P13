// Styles
import "../styles/sign-in.css"

//Components
import Header from './Header.js';
import Footer from './Footer.js';

//Backend function
import login from "../services/login.js"

import { useState } from 'react';
import { Navigate } from "react-router-dom";

function SignIn(){

    const [userEmail, setUserEmail] = useState(null);
    const [userPass, setUserPass] = useState(null);
    const [errorDisplay, setErrorDisplay] = useState("false");
    const [connected, setConnected] = useState(false);
    
    function logUserIn(){
        login(userEmail,userPass).then(e=>{
            if(e == 200){
                setConnected(true);
            }else{
                setErrorDisplay('true');
            }
        });
    }
    
    

    return (
        <div>
            <Header></Header>
            <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form>
                    <div className="input-wrapper">
                        <label for="username">Username</label><input type="text" id="username" onChange={(e)=>{setUserEmail(e.target.value)}}/>
                    </div>
                    <div className="input-wrapper">
                        <label for="password">Password</label><input type="password" id="password" onChange={(e)=>{setUserPass(e.target.value)}}/>
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me"/><label for="remember-me">Remember me</label>
                    </div>
                    <div className="error_bad_creds" data-display={errorDisplay}>Les infos que vous avez saisie ne sont pas valides</div>
                    {
                        connected?<Navigate to="/profil" replace={true}/>:<div className="sign-in-button" onClick={logUserIn} aria-label="sign-in_btn">Sign In</div>
                    }
                </form>
            </section>
            </main>
            <Footer></Footer>

        </div>
    )
}

export default SignIn;