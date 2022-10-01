// import {
//   MDBContainer,
//   MDBTabs,
//   MDBTabsItem,
//   MDBTabsLink,
//   MDBTabsContent,
//   MDBTabsPane,
//   MDBBtn,
//   MDBIcon,
//   MDBInput,
//   MDBCheckbox
// }
// from 'mdb-react-ui-kit';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSignInRegister } from '../contexts/SignInRegisterContext';

function SignIn() {
  //moved the following code to SignInRegisterContext.tsx
  // const [justifyActive, setJustifyActive] = useState('tab1');;
  // const handleJustifyClick = (value:string) => {
  //   if (value === justifyActive) {
  //     return;
  //   }
  //   setJustifyActive(value);
  // };

  // first method for signIn/register
  // const {justifyActive, name, email, password, handleJustifyClick, nameHandleChange, emailHandleChange, passwordHandleChange} = useSignInRegister()
  
  //second method for signIn/register
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
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign In
        </Button>
        <p className="text-center mt-3">Not a member? 
           <Link to="/register">
           <Button form="signin"  variant="outline-primary" style={{border: "none"}}>Register</Button>
           </Link> 
        </p>
      </Form>
      </Container>
      </>

    // <MDBContainer className="p-3 my-5 d-flex flex-column w-50 bg-light">
    //   <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
    //     <MDBTabsItem>
    //       <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'} >
    //         Login
    //       </MDBTabsLink>
    //     </MDBTabsItem>
    //     <MDBTabsItem>
    //       <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'} >
    //         Register
    //       </MDBTabsLink>
    //     </MDBTabsItem>
    //   </MDBTabs>
    //   <MDBTabsContent>
       
    //     <MDBTabsPane show={justifyActive === 'tab1'} >
    //       <div className="text-center mb-3">
    //         <p>Sign in with:</p>
    //         <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
    //           <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
    //             <MDBIcon fab icon='facebook-f' size="sm"/>
    //           </MDBBtn>
    //           <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
    //             <MDBIcon fab icon='twitter' size="sm"/>
    //           </MDBBtn>
    //           <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
    //             <MDBIcon fab icon='google' size="sm"/>
    //           </MDBBtn>
    //           <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
    //             <MDBIcon fab icon='github' size="sm"/>
    //           </MDBBtn>
    //         </div>
    //         <p className="text-center mt-3">or:</p>
    //       </div>
    //       <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' name='email' autoComplete='current-email' value={signIn.email} onChange={signInHandleChange} />
    //       <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' name='password' autoComplete='current-password' value={signIn.password} onChange={signInHandleChange} />
    //       <div className="d-flex justify-content-between mx-4 mb-4">
    //         <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
    //         <a href="!#">Forgot password?</a>
    //       </div>
    //       <MDBBtn type="submit" form="tab1" className="mb-4 w-100">Sign in</MDBBtn>
    //       {/* <p className="text-center">Not a member? <a href="#!">Register</a></p> */}
    //       <p className="text-center">Not a member?  
    //         <Button onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}  variant="outline-primary" style={{border: "none"}}>Register</Button>
    //         {/* <MDBBtn onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>Sign up</MDBBtn> */}
    //       </p>
    //     </MDBTabsPane>
     
    //     <MDBTabsPane show={justifyActive === 'tab2'}>
    //       <div className="text-center mb-3">
    //         <p>Sign in with:</p>
    //         <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
    //           <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
    //             <MDBIcon fab icon='facebook-f' size="sm"/>
    //           </MDBBtn>
    //           <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
    //             <MDBIcon fab icon='twitter' size="sm"/>
    //           </MDBBtn>
    //           <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
    //             <MDBIcon fab icon='google' size="sm"/>
    //           </MDBBtn>
    //           <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
    //             <MDBIcon fab icon='github' size="sm"/>
    //           </MDBBtn>
    //         </div>
    //         <p className="text-center mt-3">or:</p>
    //       </div>
    //       <MDBInput wrapperClass='mb-4' label='Name' id='form3' type='text' name='name' autoComplete='current-name' value={register.name} onChange={registerHandleChange} />
    //       {/* <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='text'/> */}
    //       <MDBInput wrapperClass='mb-4' label='Email' id='form4' type='email' name='email' autoComplete='current-email' value={register.email} onChange={registerHandleChange} />
    //       <MDBInput wrapperClass='mb-4' label='Password' id='form5' type='password' name='password' autoComplete='current-password' value={register.password} onChange={registerHandleChange} />
    //       <div className='d-flex justify-content-center mb-4'>
    //         <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
    //       </div>
    //       <MDBBtn type="submit" form="tab2" className="mb-4 w-100">Sign up</MDBBtn>
    //     </MDBTabsPane>
    //   </MDBTabsContent>
    // </MDBContainer>
  );
}

export default SignIn