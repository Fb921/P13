// Styles
import "../styles/home.css"

//Components
import Header from './Header.js';
import Footer from './Footer.js';

//Images
import main_img from "../assets/bank-tree.jpeg"
import icon_chat from "../assets/icon-chat.png"
import icon_money from "../assets/icon-money.png"
import icon_security from "../assets/icon-security.png"

import { useState } from 'react';

//Backend function
import authentify from "../services/authentify.js"

import { useSelector, useDispatch } from 'react-redux';

import {loggedOut,isLogged} from "../services/store_actions.js"

function Home(){
    const [connected, setConnected] = useState(false);
    const [loading, setLoading] = useState(true);
    const [editName, setEditName] = useState(false);

    const dispatch = useDispatch();

    let token = useSelector(state => state.token);
    let fname = useSelector(state => state.fname);
    let lname = useSelector(state => state.lname);
    
    authentify().then(e=>{
        if(e.status == 200){
            setConnected(true);
            if(!fname || !lname){
                let logged = isLogged(window.localStorage.getItem("token"),e.body.firstName,e.body.lastName);
                dispatch(logged);
            }
        }else{
            setConnected(false);            
            dispatch({...loggedOut});
        }
        setLoading(false);
    });

    return (
        <div>
            <Header></Header>
            <main>
                <section id="section1">
                    <img src={main_img} className="background_img"/>
                    <div className="hero-content">
                        <div className="subtitle">No fees.</div>
                        <div className="subtitle">No minimum deposit.</div>
                        <div className="subtitle">High interest rates.</div>
                        <div className="text">Open a savings account with Argent Bank today!</div>
                    </div>
                </section>
                <section className='features'>
                    <div className="feature-item">
                        <img src={icon_chat} alt="Chat Icon" className="feature-icon"/>
                        <h3 className="feature-item-title">You are our #1 priority</h3>
                        <p>
                            Need to talk to a representative? You can get in touch through our
                            24/7 chat or through a phone call in less than 5 minutes.
                        </p>
                    </div>
                    <div className="feature-item">
                        <img src={icon_money} alt="Chat Icon" className="feature-icon"/>
                        <h3 className="feature-item-title">More savings means higher rates</h3>
                        <p>
                            The more you save with us, the higher your interest rate will be!
                        </p>
                    </div>
                    <div className="feature-item">
                        <img src={icon_security} alt="Chat Icon" className="feature-icon"/>
                        <h3 className="feature-item-title">Security you can trust</h3>
                        <p>
                            We use top of the line encryption to make sure your data and money
                            is always safe.
                        </p>
                    </div>
                </section>
            </main>
            <Footer></Footer>        
        </div>
    )
}

export default Home;