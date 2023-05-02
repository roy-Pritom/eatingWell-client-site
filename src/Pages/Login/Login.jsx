import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { authContext } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
const Login = () => {
    const [success,setSuccess]=useState('');
    const [error,setError]=useState('');
    const location=useLocation();
    // console.log(location)
   const from=location.state?.from?.pathname || '/';
//    console.log(from)

    const navigate=useNavigate()
    const {logIn,googleLogin}=useContext(authContext)

    const handleLogin=(event)=>{
        event.preventDefault();
        setSuccess('')
        setError('')
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
  
        console.log(email,password)
        logIn(email,password)
        .then(result=>{
            const loggedUser=result.user;
            setSuccess('Successfully login')
            form.reset();
            navigate(from)
        })
        .catch(error=>{
            setError(error.message)
        })
    }

    const loginWithGoogle=()=>{
        setSuccess('')
        setError('')
        googleLogin()
        .then(result=>{
            const loggedUser=result.user;
            setSuccess('Successfully login')
            
        })
        .catch(error=>{
            setError(error.message)
        })

    }
    return (
        
        <div className='mx-auto my-5 w-50'>
            <div className='border border-2 p-4'>
                      <Form onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' required placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"  name='password' required placeholder="Password" />
      </Form.Group>
     
      <Button variant="primary" type="submit">
       Login
      </Button>
    </Form>

       <div className="mt-2">
        <p><small>Dont't have an account? Please <Link to='/register'>Register</Link> </small></p>
       </div>
      <Form.Text className="text-muted text-success">
          {success}
        </Form.Text>
      <Form.Text className="text-muted text-danger">
          {error}
        </Form.Text>
        </div>
        <div className="d-flex gap-4 mt-2 justify-content-center">
            <hr className='w-25' />or <hr className='w-25' />
        </div>
       <div className="d-flex justify-content-center mt-4 ">
       <button type="button" class="btn btn-outline-primary w-75 d-flex gap-4 justify-content-center align-items-center" onClick={loginWithGoogle}>
       <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png?w=740&t=st=1683030098~exp=1683030698~hmac=a172fbf96bc191335562a518ae58b3fe0d5807cd0aa88a9835adf20c6d03047b" style={{width:"40px",height:"40px"}} alt="" />
       Continue with Google

       </button>
      
       </div>
       <div className="d-flex justify-content-center mt-4 ">
       <button type="button" class="btn btn-outline-primary w-75 d-flex gap-4 justify-content-center align-items-center" onClick={loginWithGoogle}>
       <img src="https://cdn-icons-png.flaticon.com/512/733/733609.png?w=740&t=st=1683032868~exp=1683033468~hmac=f8415bbd3b9f44c83a6fc67837cddfa6e2ffcae53ccc7cc709f64b9664d7b433" style={{width:"40px",height:"40px"}} alt="" />
       Continue with Github

       </button>
       </div>

        </div>
    );
};

export default Login;