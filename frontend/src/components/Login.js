import axios from 'axios';
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

import NavBar from './NavBar';




 
 
function Login() {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const navigate = useNavigate()
   
    async function login(event){
        event.preventDefault();
      try{
        await axios.post('http://13.201.162.236:8089/login',{
          email : email,
          password : password
        })
   
    .then(result => {
      alert('success')
      localStorage.setItem('token' , result.data.token);
      localStorage.setItem('email', result.data.email);
      console.log(localStorage)
      
      navigate('/user/dashboard')
      
    })
  }catch(error) {
      if(email === "" && password === ""){
        alert("enter email and password");
      }else if (email === ''){
        alert('enter email');
      }else if(password === ''){
        alert('enter password');
      }else{
        alert('email and password is incorrect');
      }
     
    }
    }
  
 
  return (
   
    <div>
     <NavBar/>
     {/* <img id="contact" src="/Stock1.jpg" alt="he" /> */}
     <div className='login-container'>
   <div className='container d-flex justify-content-center align-items-center'>
 
<Card style={{ width: '30rem', marginTop: '100px', backgroundColor: 'rgba(0, 0, 0, 0.5)',  color: 'white'}}>
    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
    <Card.Body>
    <Form className='login'>
      <div className='logo'>
        {/* <Image src={logo} height='70' roundCircle></Image>   */}
      </div>
      <h2>Login into ProfitPilot</h2>
    <Form.Group className="mb-3" controlId="Email">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" value={email}
      onChange={(event) => {
        setEmail(event.target.value);
      }}
      required>
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
        <div className='button-group justify-content-center'>
      <Button type= 'Submit' variant="success" onClick={login}>Login</Button>
 
      </div>
  </Form>
    </Card.Body>
  </Card>
  </div>
  </div>
  </div>
 
  );
}
 
export default Login;