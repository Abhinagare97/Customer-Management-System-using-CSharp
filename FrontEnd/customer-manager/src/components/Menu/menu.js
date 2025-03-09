import { Link } from "react-router-dom";

import "./menu.css"; 
const Menu = () =>{
    return (
        <nav>
        <ul >
          <li ><Link to="/">Home</Link></li>
          <li><Link to="/customers">Customers</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/createcustomer">CreateCustomer</Link></li>
          <li><Link to="/displaywallet">CreateCustomer</Link></li>
          
        </ul>
      </nav>
      );
    
}

export default Menu;