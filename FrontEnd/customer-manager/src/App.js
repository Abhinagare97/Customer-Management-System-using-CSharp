
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CustomerShow from './components/CustomerShow/customershow';
import Menu from './components/Menu/menu';
import Login from './components/Login/login';
import Profile from './components/IndividualView/profile';

 import CreateCustomer from './components/CreateCustomer/createcustomer';

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      <h1>Customer Management System</h1>
      {/* <Menu/> */}
      {/* <Login/> */}
        <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/login" element={<Login />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/customers" element={<CustomerShow />} />
          <Route path="/profile" element={<Profile />} /> 
          <Route path="/createcustomer" element={<CreateCustomer />} /> 
          
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
