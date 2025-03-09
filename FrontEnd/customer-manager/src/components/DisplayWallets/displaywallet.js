import axios from "axios";
import { useEffect, useState } from "react"

const DisplayWallets =() =>{
    const[wallets, setwallets] =useState([]);

    useEffect(()=>{
        axios.get("http://localhost:5232/api/Wallets")
        .then(resp => setwallets(resp.data));

    },[]);
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Wallet ID</th>
                        <th>Customer ID</th>
                        <th>Wallet Type </th>
                        <th>Wallet Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>{wallets.walletId}</td>
                    <td>{wallets.custId}</td>
                    <td>{wallets.walletType}</td>
                    <td>{wallets.walletAmount}</td>
                    </tr>
                </tbody>
            </table>
            
        </div>
    )
}
export default DisplayWallets;