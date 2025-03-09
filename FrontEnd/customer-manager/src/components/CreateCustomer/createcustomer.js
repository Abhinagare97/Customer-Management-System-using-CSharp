import axios from "axios";
import Menu from "../Menu/menu";

const { useState } = require("react")

const CreateCustomer =() =>{
    const [data ,setdata] =useState({
            custId :0,
            custName:"",
            custUserName:"",
            custPassword:"",
            city:"", 
            state:"",
            email:"",
            mobileNo:""
        })


const createCustomer =() => {
    axios.post("http://localhost:5232/api/Customers",{
        custId :data.custId,
        custName:data.custName,
        custUserName:data.custUserName,
        custPassword:data.custPassword,
        city:data.custPassword, 
        state:data.state,
        email:data.email,
        mobileNo:data.mobileNo
    })
    .then(resp => {
        console.log(resp.data);
      })
      .catch(error => {
        console.error("Error Showing data:", error);
      });
}

const handleChange =event => {
    setdata({
        ...data,[event.target.name ]:event.target.value
    })
}

return(
    <div>
        <Menu/>
        <h2>Enter Details</h2>
        <label>Enter Id: </label>
        <input type ="text" name="id" 
        value = {data.id} onChange={handleChange}/> <br/>

        <label>Enter Name</label>
        <input type ="text" name ="name"
        value ={data.custName} onChange={handleChange}/> <br/>

        <label>Enter Username</label>
        <input type ="text" name ="username"
        value ={data.custUserName} onChange={handleChange}/> <br/>
        
        <label>Enter Password</label>
        <input type ="text" name ="passcode"
        value ={data.custPassword} onChange={handleChange}/> <br/>
        
        <label>Enter city</label>
        <input type ="text" name ="city"
        value ={data.city} onChange={handleChange}/> <br/>
        
        <label>Enter state</label>
        <input type ="text" name ="state"
        value ={data.state} onChange={handleChange}/> <br/>
        
        <label>Enter email</label>
        <input type ="text" name ="email"
        value ={data.email} onChange={handleChange}/> <br/>

        <label>Enter Mobile no</label>
        <input type ="text" name ="mobileno"
        value ={data.mobileNo} onChange={handleChange}/> <br/>
        
        <input type="button" value="Create Account" onClick={createCustomer} />
        
    </div>
)

}

export default CreateCustomer;