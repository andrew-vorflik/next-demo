import GoogleButton from '@/components/GoogleButton/GoogleButton'
import { SignIn } from '@/components/SignIn/SignIn'
import React from 'react'

const Signin = () => {
  return (
    <div>
      <h1>Sign in</h1>
      <GoogleButton />
      <div>or</div>
      <SignIn />
    </div>
  )
}

export default Signin