import React, { createContext, ReactNode, useContext,  useState } from 'react';

type SignInRegisterProviderProps = {
    children: ReactNode
}
type SignInRegisterContextProps = {
    justifyActive: string
    handleJustifyClick: (value: string) => void
  // first method for signIn/register:
  // name: string
  // email: string
  // password: string
  // nameHandleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  // emailHandleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  // passwordHandleChange: (e: React.ChangeEvent<HTMLInputElement>) => void

  //second method for signIn/register:
  signIn: SignInProps
  register: RegisterProps
  signInHandleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  registerHandleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  // handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}
type SignInProps = {
  email: string
  password: string
}
type RegisterProps = {
  name: string
  email: string
  password: string
}

const signInRegisterContext = createContext({} as SignInRegisterContextProps)

export const useSignInRegister = () => {
   return useContext(signInRegisterContext)
}

export const SignInRegisterProvider = ({children}: SignInRegisterProviderProps) => {
  const [justifyActive, setJustifyActive] = useState('tab1');
  const handleJustifyClick = (value:string) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };
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
  const [register, setRegister] = useState<RegisterProps>({name: '', email: '', password: ''})
  const signInHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignIn({...signIn, [e.target.name]: e.target.value})
  }
  const registerHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegister({...register, [e.target.name]: e.target.value})
  }
  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  // }

  return(
    // <signInRegisterContext.Provider value={{justifyActive, name, email, password, handleJustifyClick, nameHandleChange, emailHandleChange, passwordHandleChange}}>
    <signInRegisterContext.Provider value={{signIn, register, justifyActive, handleJustifyClick, signInHandleChange, registerHandleChange}}>  
      {children}
    </signInRegisterContext.Provider>
  )
}

