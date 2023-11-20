import "../styles/profil-page.css"
import "../styles/profilTransaction.css"

//Components
import Header from "./Header.js"
import Footer from "./Footer.js"
import LoadingSpinner from "./loadingSpinner.js"
import ProfilTransaction from "./ProfilTransaction.js"

//Backend function
import authentify from "../services/authentify.js"
import changeName from "../services/change_name.js"

import { useState } from 'react';
import { Navigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import {setNames, loggedOut,isLogged} from "../services/store_actions.js"

function ProfilPage(){
    const [connected, setConnected] = useState(false);
    const [loading, setLoading] = useState(true);
    const [editName, setEditName] = useState(false);
    let formFname = "";
    let formLname = "";
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

    function saveName(){
        changeName(token,formFname,formLname).then(e=>{
                if(e.status==200){
                    let name_action = setNames(e.body.firstname,e.body.lastname);
                    dispatch(name_action);
                    setEditName(false);
                }
            }
        );
    }
    
    if(loading){
        return (<LoadingSpinner/>)
    }else{
        if(!connected){
            return(
                <Navigate to='/login'></Navigate>
            )
        }else{
            return (
                <div>
                    <Header fname={fname}/>
                    <main className="profil">
                        <div className="header">
                            <h1>Welcome back<br/>
                                {
                                    editName?<input name="fname" onChange={(e)=>{formFname=e.target.value}}/>:fname+" "
                                } 
                                {
                                    editName?<input name="lname" onChange={(e)=>{formLname=e.target.value}}/>:lname+'!'
                                }
                            </h1>
                            <div className="btn_container">
                                {editName?<div><button onClick={saveName}>Save</button><button onClick={()=>setEditName(false)}>Cancel</button></div>:<button className='_btn green' onClick={()=>setEditName(true)}>Edit Name</button>}
                            </div>
                        </div>
                        <div className="balances_container">
                            <ProfilTransaction type='Argent Bank Checking' num="x8349" amount='2,082.79' text='Available' slug='bank-checking'/>
                            <ProfilTransaction type='Argent Bank Savings' num="x6712" amount='10,928.42' text='Available' slug='bank-savings'/>
                            <ProfilTransaction type='Argent Bank Credit Card' num="x8349" amount='184.30' text='Current' slug='bank-credit-card'/>
                        </div>
                    </main>
                    <Footer/>
                </div>
            )
        }
    }
}

export default ProfilPage;
