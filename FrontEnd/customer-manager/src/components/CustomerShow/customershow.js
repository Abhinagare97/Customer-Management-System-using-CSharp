import { useState, useEffect } from "react";
import axios from "axios";
import Menu from "../Menu/menu";

const CustomerShow = () => {
    const [Customers, setCustomer] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5232/api/Customers")//http://localhost:5293/api/Accounts
            .then(resp => setCustomer(resp.data));
    }, []);

    return (
        <div>
            <h2>All Customers</h2>
            <Menu/>

            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Username </th>
                        <th>Name</th>
                        <th>Password</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Email</th>
                        <th>Moblie</th>

                    </tr>
                </thead>
                <tbody>
                    {Customers.length > 0 ? (
                        Customers.map((Customers) => (
                            <tr key={Customers.custId}>
                                <td>{Customers.custId}</td>
                                <td>{Customers.custUserName}</td>
                                <td>{Customers.custName}</td>
                                <td>{Customers.custPassword}</td>
                                <td>{Customers.city}</td>
                                <td>{Customers.state}</td>
                                <td>{Customers.email}</td>
                                <td>{Customers.mobileNo}</td>
                              
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="8">No Customers found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default CustomerShow;