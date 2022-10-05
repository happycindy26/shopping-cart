import { Form, Button, Container } from 'react-bootstrap'
import { useSignInRegister } from '../contexts/SignInRegisterContext'

function Register() {
  const {register, registerHandleChange, registerHandleSubmit} = useSignInRegister()
 
  return (
    <>
    <h1 className='text-center mt-5'>Register</h1>
    <Container className="p-3 my-5 d-flex flex-column w-50 bg-light">
      <Form onSubmit={registerHandleSubmit} id="register">
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" name='name' autoComplete='current-name' value={register.name} onChange={registerHandleChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name='email' autoComplete='current-email' value={register.email} onChange={registerHandleChange}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name='password' autoComplete='current-password' value={register.password} onChange={registerHandleChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control type="password" placeholder="Confirm password" name='confirmPassword' autoComplete='current-confirm-password' value={register.confirmPassword} onChange={registerHandleChange}/>
        </Form.Group>
        <Button form="register" variant="primary" type="submit" >
          Register
        </Button>
      </Form>
    </Container>
    </>
  )
}

export default Register