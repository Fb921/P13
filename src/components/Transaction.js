import {useState} from "react";

function Transaction(props){
    const [collapse,setCollapse] = useState(props.collapse);

    return (
        <tr className="transaction_row">
            <td><i class="fa fa-chevron-down icon" onClick={()=>{setCollapse(!collapse)}}></i></td>
            <td className="date_col">
                {props.date}
                <div className ="collapsible_container" data-display={collapse}>
                    <div className="trans_infos">Transaction type : {props.type}</div>
                    <div className="trans_infos">Catégorie : {props.cat}<i class="fa fa-pencil"></i></div>
                    <div className="trans_infos">Notes : {props.notes}<i class="fa fa-pencil"></i></div>
                </div>
            </td>
            <td className="desc_col">{props.desc}</td>
            <td className="amount_col">${props.amount}</td>
            <td className="balance_col">${props.balance}</td>
        </tr>
    )
}

export default Transaction;