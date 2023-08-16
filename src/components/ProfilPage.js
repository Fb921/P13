import "../styles/profil-page.css"
import "../styles/profilTransaction.css"

//Components
import Header from "./Header.js"
import Footer from "./Footer.js"
import ProfilTransaction from "./ProfilTransaction"

function ProfilPage(){
    return (
        <div>
            <Header/>
            <main className="profil">
                <div className="header">
                    <h1>Welcome back<br/>
                        Fname Lname!
                    </h1>
                    <div className="btn_container">
                        <button>Save</button><button>Cancel</button>
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

export default ProfilPage;
