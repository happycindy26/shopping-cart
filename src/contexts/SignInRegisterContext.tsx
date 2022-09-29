import React, { createContext, ReactNode, useContext,  useState } from 'react';

type SignInRegisterProviderProps = {
    children: ReactNode
}
type SignInRegisterContextProps = {
  name: string
  email: string
  password: string
  justifyActive: string
  nameHandleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  emailHandleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  passwordHandleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleJustifyClick: (value: string) => void
  // handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

const signInRegisterContext = createContext({} as SignInRegisterContextProps)

export const useSignInRegister = () => {
   return useContext(signInRegisterContext)
}

export const SignInRegisterProvider = ({children}: SignInRegisterProviderProps) => {
  const [justifyActive, setJustifyActive] = useState('tab1');;
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleJustifyClick = (value:string) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };
  const nameHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  const emailHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  const passwordHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }
  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  // }

  return(
    <signInRegisterContext.Provider value={{justifyActive, name, email, password, handleJustifyClick, nameHandleChange, emailHandleChange, passwordHandleChange}}>
      {children}
    </signInRegisterContext.Provider>
  )
}

