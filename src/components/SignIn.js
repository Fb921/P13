// Styles
import "../styles/sign-in.css"

//Components
import Header from './Header.js';
import Footer from './Footer.js';

import { Navigate } from "react-router-dom";

function SignIn(){


    return (
        <div>
            <Header></Header>
            <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form>
                    <div className="input-wrapper">
                        <label for="username">Username</label><input type="text" id="username" onChange={(e)=>{}}/>
                    </div>
                    <div className="input-wrapper">
                        <label for="password">Password</label><input type="password" id="password" onChange={(e)=>{}}/>
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me"/><label for="remember-me">Remember me</label>
                    </div>
                    <div className="sign-in-button" onClick={()=>{}} aria-label="sign-in_btn">Sign In</div>
                </form>
            </section>
            </main>
            <Footer></Footer>

        </div>
    )
}

export default SignIn;