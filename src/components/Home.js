// Styles
import "../styles/home.css"

//Components
import Header from './Header.js';
import Footer from './Footer.js';
import HomeInfos from './HomeInfos.js';

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

    let chat_txt = "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.";
    let money_txt = "The more you save with us, the higher your interest rate will be!";
    let secu_txt = "We use top of the line encryption to make sure your data and money is always safe.";

    if(token){
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
    }

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
                    <HomeInfos title="You are our #1 priority" icon={icon_chat} text={chat_txt}></HomeInfos>
                    <HomeInfos title="More savings means higher rates" icon={icon_money} text={money_txt}></HomeInfos>
                    <HomeInfos title="Security you can trust" icon={icon_security} text={secu_txt}></HomeInfos>
                </section>
            </main>
            <Footer></Footer>        
        </div>
    )
}

export default Home;