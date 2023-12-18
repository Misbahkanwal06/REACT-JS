import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import React, { useState } from 'react'

function UserForm() {
//  const email = "misbah@gmail.com";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
//  login
const userlogin= (e)=>{
  e.preventDefault();
 const payload = { email, password}
 console.log(payload);
 };



  return (     
    <Form onSubmit={userlogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=> setEmail( e.target.value)}/>
        <Form.Text className="text-muted">
          {email}
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        {password}
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  
  )
}

export default UserForm
