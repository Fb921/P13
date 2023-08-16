import "../styles/profil.css"

function Profil(){
    return (
        <div>
            <h1>Welcome back<br/>{window.localStorage.getItem('fname')} {window.localStorage.getItem('lname')}</h1>
            <div className="btn_container"><a className='_btn green' href=''>Edit name</a></div>
        </div>
    )
}

export default Profil;