import { Authenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';

const User = () => {
  return (
    
    <Authenticator>
      {({signOut}) => (
        <div className="mt-5 text-center">
          <h1>Hello</h1>
          <h3>You are authenticated!</h3>
          <button onClick={signOut}>Sign out</button>
        </div>
      )}
    </Authenticator>
   
  )
}

export default User