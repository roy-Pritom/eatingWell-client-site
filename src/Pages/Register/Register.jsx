import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';


const Register = () => {
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);

    const { createUser,googleLogin } = useContext(authContext)
    const navigate = useNavigate();

    const handleSignUp = (event) => {
        setSuccess('')
        setError('')
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;
        const photoUrl = form.url.value;
        console.log(photoUrl, email, password)
        if (password.length < 6) {
            setError('Password should be 6 character');
            return;
        }
        else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError('Password should have at least two number');
            return;
        }
        else if (!/(?=.*[A-Z])/.test(password)) {
            setError('Password should have at least one upperCase');
            return;
        }
        else if (!/(?=.*[a-z])/.test(password)) {
            setError('Password should have at least one lowerCase');
            return;
        }
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                setSuccess('Successfully register')
                updateUserProfile(loggedUser, name, photoUrl)
                form.reset();
                navigate('/')
            })
            .catch(error => {
                setError(error.message)
            })
    }
    const handleTerms = (event) => {
        setAccepted(event.target.checked)
    }
    const updateUserProfile = (currentUser, name, photoUrl) => {
        updateProfile(currentUser,
            {
                displayName: name, photoURL: photoUrl
            })
    }
    const loginWithGoogle = () => {
        setSuccess('')
        setError('')
        googleLogin()
            .then(result => {
                const loggedUser = result.user;
                setSuccess('Successfully login')

            })
            .catch(error => {
                setError(error.message)
            })

    }
    return (
        <div className='mb-5 pb-5 w-75 mx-auto'>
            <div className='mx-auto my-5 py-5   border border-2 px-4 py-5'>
                <h3 className=''>Register your account</h3>
                <Form className='py-3' name='form' onSubmit={handleSignUp}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Enter your name" required />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPhotoUrl">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="text" name='url' required placeholder="Enter photo url" />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' required placeholder="Enter email" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" required name='password' placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" onClick={handleTerms}
                            label={<>Accepts <Link to='/terms'>Terms and Condition</Link></>} />
                    </Form.Group>
                    <Button variant="primary" type="submit" disabled={!accepted} >
                        Register
                    </Button>
                </Form>
                <div className="">
                    <p><small>Already have an account? Please <Link to='/login'>Login</Link> </small></p>
                </div>
                <p className=" text-success">
                    {success}
                </p>
                <p className="text-danger">
                    {error}
                </p>
            </div>
            <div className="d-flex gap-4 mt-2 justify-content-center">
                <hr className='w-25' />or <hr className='w-25' />
            </div>
            <div className="d-flex justify-content-center mt-4 ">
                <button type="button" className="btn btn-outline-primary w-75 d-flex gap-4 justify-content-center align-items-center" onClick={loginWithGoogle} >
                    <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png?w=740&t=st=1683030098~exp=1683030698~hmac=a172fbf96bc191335562a518ae58b3fe0d5807cd0aa88a9835adf20c6d03047b" style={{ width: "40px", height: "40px" }} alt="" />
                    Continue with Google

                </button>

            </div>
            <div className="d-flex justify-content-center mt-4 ">
                <button type="button" className="btn btn-outline-primary w-75 d-flex gap-4 justify-content-center align-items-center" >
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733609.png?w=740&t=st=1683032868~exp=1683033468~hmac=f8415bbd3b9f44c83a6fc67837cddfa6e2ffcae53ccc7cc709f64b9664d7b433" style={{ width: "40px", height: "40px" }} alt="" />
                    Continue with Github

                </button>
            </div>
        </div>
    );
};

export default Register;