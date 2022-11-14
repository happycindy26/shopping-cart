import { Authenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import { View } from '@aws-amplify/ui-react';

const User = () => {
  return (
    <Authenticator>
      {({signOut}) => (
        <View textAlign="center">
          <h1>Hello</h1>
          <h3>You are authenticated!</h3>
          <button onClick={signOut}>Sign out</button>
        </View>
      )}
    </Authenticator>
  )
}

export default User