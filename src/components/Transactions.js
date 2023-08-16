import "../styles/transactions.css"
import "../styles/transaction.css"
import {transtype_datas} from "../datas/transaction_type_datas.js"
import {trans_datas} from "../datas/transactions_data.js"

import Header from "./Header.js"
import Footer from "./Footer.js"
import Transaction from "./Transaction.js"

import { useParams } from "react-router-dom";

function Transactions(props){

    let { transtype } = useParams();

    return (<div>
        <Header/>
        <main className="transactions_content">
            <div className="header">
                <div>{transtype_datas[transtype].type} {transtype_datas[transtype].num}</div>
                <div className="total_amount_container">${transtype_datas[transtype].totalBalance}</div>
                <div>{transtype_datas[transtype].infosType} Balance</div>
            </div>
            <div className="transaction_container">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Amount</th>
                            <th>Balance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            trans_datas.map(t =>{ return (<Transaction date={t.date} desc={t.desc} amount={t.amount} balance={t.balance} collapse={false} cat="Food" type='Electronic'/>)})
                        }
                    </tbody>
                </table>
            </div>
        </main>
        <Footer/>
    </div>)
}

export default Transactions;