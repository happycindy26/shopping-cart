import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSignInRegister } from '../contexts/SignInRegisterContext';

function SignIn() {
  const {signIn, signInHandleChange, signInHandleSubmit} = useSignInRegister()
  return(
    <>
    <h1 className='text-center mt-3'>Login</h1>
    <p className="text-center">Not a member? 
           <Link to="/register">
           <Button  variant="outline-primary" style={{border: "none"}}>Register</Button>
           </Link> 
        </p>
    <Container className="p-3 my-3 d-flex flex-column w-50 bg-light">
      <Form onSubmit={signInHandleSubmit} id="signin" > 
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name='email' autoComplete='current-email' value={signIn.email} onChange={signInHandleChange}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name='password' autoComplete='current-password' value={signIn.password} onChange={signInHandleChange}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign In
        </Button>
      </Form>
    </Container>
    </>
  );
}

export default SignIn