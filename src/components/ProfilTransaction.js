import { Link } from "react-router-dom"

function ProfilTransaction(props){
    return (
        <div className="profil_transaction_container">
            <div className="left_col">
                <div>{props.type} ({props.num})</div>
                <div className="amount">${props.amount}</div>
                <div>{props.text} Balance</div>
            </div>
            <div className="right_col"><Link to={"/transactions/"+props.slug}><button>View transactions</button></Link></div>
        </div>
    )
}

export default ProfilTransaction;