import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../Menu/menu";

const Profile = () => {
  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (!loggedInUser) {
      navigate("/login"); // Redirect if no user is logged in
      return;
    }

    const fetchCustomer = async () => {
      try {
        const response = await fetch(`http://localhost:5232/api/Customers/by-username/${loggedInUser}`);
        if (!response.ok) {
          throw new Error("Customer not found");
        }
        const data = await response.json();
        setCustomer(data);
      } catch (error) {
        console.error("Error fetching customer:", error);
      } finally {
        setLoading(false);
      }
    }; 
   

    fetchCustomer();
  }, [navigate]);

  if (loading) return <p>Loading customer details...</p>;

  return (
    <div>
    
      {customer ? (
       
        <div>
           <Menu/>
           <h2>Customer Profile</h2>
          <p><strong>Name:</strong> {customer.custName}</p>
          <p><strong>Username:</strong> {customer.custUserName}</p>
          <p><strong>Email:</strong> {customer.email}</p>
          <p><strong>City:</strong> {customer.city}</p>
          <p><strong>State:</strong> {customer.state}</p>
          <p><strong>Phone:</strong> {customer.mobileNo}</p>
          
        </div>
      ) : (
        <p>Customer not found.</p>
      )}
    </div>
  );
};

export default Profile;
