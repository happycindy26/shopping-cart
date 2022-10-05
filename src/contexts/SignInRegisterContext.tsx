import axios from 'axios';
import React, { createContext, ReactNode, useContext,  useState } from 'react';
//import { useNavigate } from 'react-router-dom';

type SignInRegisterProviderProps = {
    children: ReactNode
}
type SignInRegisterContextProps = {
  // justifyActive: string
  // handleJustifyClick: (value: string) => void
  // first method for signIn/register:
  // name: string
  // email: string
  // password: string
  // nameHandleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  // emailHandleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  // passwordHandleChange: (e: React.ChangeEvent<HTMLInputElement>) => void

  //second method for signIn/register:
  signIn: SignInProps
  // signInData: SignInProps
  register: RegisterProps
  signInHandleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  registerHandleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  signInHandleSubmit: (event:React.FormEvent<HTMLFormElement>) => void
  registerHandleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}
type SignInProps = {
  email: string
  password: string
}
type RegisterProps = {
  name: string
  email: string
  password: string
  confirmPassword: string
}

const signInRegisterContext = createContext({} as SignInRegisterContextProps)

export const useSignInRegister = () => {
   return useContext(signInRegisterContext)
}

export const SignInRegisterProvider = ({children}: SignInRegisterProviderProps) => {
  //let navigate = useNavigate()
  // const [justifyActive, setJustifyActive] = useState('tab1');
  // const handleJustifyClick = (value:string) => {
  //   if (value === justifyActive) {
  //     return;
  //   }
  //   setJustifyActive(value);
  // };
  // first method for signIn/register:
  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // const nameHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setName(e.target.value)
  // }
  // const emailHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setEmail(e.target.value)
  // }
  // const passwordHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setPassword(e.target.value)
  // }

  //second method for signIn/register:
  const [signIn, setSignIn] = useState<SignInProps>({email: '', password: ''})
  const [register, setRegister] = useState<RegisterProps>({name: '', email: '', password: '', confirmPassword: ''})
  const signInHandleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSignIn({...signIn, [event.target.name]: event.target.value})
  }
  const registerHandleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setRegister({...register, [event.target.name]: event.target.value})
  }
  const signInHandleSubmit = (event: React.FormEvent<HTMLFormElement>):void => {
    event.preventDefault();
    // const signInData = {
    //   email: signIn.email,
    //   password: signIn.password
    // }
    
    // axios.post('http://localhost:80443/api/signin', signInData);
    // console.log(signInData)
  }
  const registerHandleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const registerData = {
      name: register.name,
      email: register.email,
      password: register.password,
      confirmPassword: register.confirmPassword
    }
    console.log(registerData)
    
    axios.post('http://localhost:80443/api/register', registerData);
   
    // axios.post(`insert.php`, signInData)
    //  .then(res => console.log(res.data))
    // axios.post('http://localhost/shopping-cart/insert.php', signInData)
    // .then((result) => {
    //   if (result.data.Status === 'Invalid') {
    //     alert('Invalid user')
    //   }
    //   else {
    //     navigate(`/dashboard`)
    //   }
    // })

    //Production level code for sending/receiving data
    // axios.post('https://shopping-cart-local.com/shopping-cart/insert.php', signInData)
    //   .then(res => console.log(res.data))
    //???setSignIn({})
  }

  return(
    // <signInRegisterContext.Provider value={{justifyActive, name, email, password, handleJustifyClick, nameHandleChange, emailHandleChange, passwordHandleChange}}>
    <signInRegisterContext.Provider value={{signIn, register, signInHandleChange, registerHandleChange, signInHandleSubmit, registerHandleSubmit}}>  
      {children}
    </signInRegisterContext.Provider>
  )
}

