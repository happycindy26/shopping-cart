import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';
import { useSignInRegister } from '../contexts/SignInRegisterContext';

function SignInRegister() {
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
  const {signIn, register, justifyActive, handleJustifyClick, signInHandleChange, registerHandleChange} = useSignInRegister()
 
  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50 bg-light">
      <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'} >
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'} >
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={justifyActive === 'tab1'}>
          <div className="text-center mb-3">
            <p>Sign in with:</p>
            <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='facebook-f' size="sm"/>
              </MDBBtn>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='twitter' size="sm"/>
              </MDBBtn>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='google' size="sm"/>
              </MDBBtn>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='github' size="sm"/>
              </MDBBtn>
            </div>
            <p className="text-center mt-3">or:</p>
          </div>
          <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' name='email' value={signIn.email} onChange={signInHandleChange} />
          <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' name='password' value={signIn.password} onChange={signInHandleChange} />
          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>
          <MDBBtn className="mb-4 w-100">Sign in</MDBBtn>
          {/* <p className="text-center">Not a member? <a href="#!">Register</a></p> */}
          <p className="text-center">Not a member?  
            <Button onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}  variant="outline-primary" style={{border: "none"}}>Register</Button>
            {/* <MDBBtn onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>Sign up</MDBBtn> */}
          </p>
        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === 'tab2'}>
          <div className="text-center mb-3">
            <p>Sign in with:</p>
            <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='facebook-f' size="sm"/>
              </MDBBtn>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='twitter' size="sm"/>
              </MDBBtn>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='google' size="sm"/>
              </MDBBtn>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='github' size="sm"/>
              </MDBBtn>
            </div>
            <p className="text-center mt-3">or:</p>
          </div>
          <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text' name='name' value={register.name} onChange={registerHandleChange} />
          {/* <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='text'/> */}
          <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email' name='email' value={register.email} onChange={registerHandleChange} />
          <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password' name='password' value={register.password} onChange={registerHandleChange} />
          <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
          </div>
          <MDBBtn className="mb-4 w-100">Sign up</MDBBtn>
        </MDBTabsPane>
      </MDBTabsContent>
    </MDBContainer>
  );
}

export default SignInRegister