
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';

const LogIn = () => {
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const { setUser, providerLogin } = useContext(AuthContext);


    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                if (user) {
                    navigate(from, { replace: true });
                }
                else {
                    toast.error('Your are not verified. Please verify your email address.')
                }
            })
            .catch(error => console.error(error))
    }

    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;

                console.log(user);
                if (user) {
                    navigate(from, { replace: true });
                }
                else {
                    toast.error('Your are not verified. Please verify your email address.')
                }
            })
            .catch(error => {
                console.error('error: ', error)
            })
    }
    const [error, setError] = useState('');
    const { signIn, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                form.reset();
                setUser(user)
                setError('');
                if (user) {
                    navigate(from, { replace: true });
                }
                else {
                    toast.error('Your are not verified. Please verify your email address.')
                }
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    return (
        <div className='m-5 p-5 bg-secondary bg-gradient bg-opacity-10 '>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required />
                </Form.Group>

                <Button className='ms-2 m-2' variant="primary" type="submit">
                    Login
                </Button>
                <Button onClick={handleGoogleSignIn} className='m-2' variant="primary">  Login with Google</Button>
                <Button onClick={handleGithubSignIn} className='m-2' variant="primary">  Login with GitHub</Button>

                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
            </Form>
            <p className='mt-3'>New Here? Create an accout <Link to='/register'><span className='text-primary fw-bold'>Sign Up</span></Link></p>
        </div>
    );
};

export default LogIn;