import React from 'react';
import axios from 'axios';
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';


 
function Signup()
{
  const [userid, setUserid] = useState('');
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const navigate = useNavigate()
 
    //  To Register new User //
    async function save(event)
    {
        event.preventDefault();
 
        await axios.post("http://13.201.162.236:8095/ProfitPilot/addUser",
      {
        userid: userid,
        name: name,
        password: password,
        email: email,
        country: country
      })
      .then((response) => {
        alert("User Register Successfully");
        navigate('/login')
      })
      .catch((error) =>{
        alert("wrong details");
      })
          // alert("User Register Successfully");
          // navigate('/login')
         
    }
   
 
   return (
    <div>
      <NavBar/>
    
    <div className='register'>
      
    <div className='register-container '>   
<div className='container d-flex justify-content-center align-items-center'>
 {/* <img src={city1} height='70px' width= "50px" roundCircle/>   */}
<Card style={{ width: '35rem', marginTop: '20px', backgroundColor: 'rgba(0, 0, 0, 0.5)',  color: 'white'}} >
 {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
 <Card.Body>
 <Form className='signup' onSubmit={save}>
   <div className='logo'>
   </div>
   <h2>Register </h2>
 
 
 <Form.Group className="mb-2" controlId="Name">
   <Form.Label>Name</Form.Label>
   <Form.Control type="text" placeholder="Enter name" value={name}
   onChange={(event) => {
     setName(event.target.value);
   }} required>
     </Form.Control>
     </Form.Group>
 
 <Form.Group className="mb-3" controlId="Password">
   <Form.Label>Password</Form.Label>
   <Form.Control type="password" placeholder="Password" value={password}
   onChange={(event) => {
     setPassword(event.target.value);
   }} required>
     </Form.Control>
     </Form.Group>
 
  <Form.Group className="mb-3" controlId="Email">
   <Form.Label>Email</Form.Label>
   <Form.Control type="email" placeholder="Enter email" value={email}
   onChange={(event) => {
     setEmail(event.target.value);
   }} required>
     </Form.Control>
     </Form.Group>
 
 
  <Form.Group className="mb-3" controlId="country">
   <Form.Label>Country</Form.Label>
   <Form.Control type="text" placeholder="Enter country" value={country}
   onChange={(event) => {
     setCountry(event.target.value);
   }} required>
     </Form.Control>
     </Form.Group>
 
     
  <div className='button-group'>
    <Button type= 'Submit' variant="success">Signup</Button>
  </div>
</Form>
</Card.Body>
</Card>
</div>
</div>
</div>
</div>
 
);
}
export default Signup;