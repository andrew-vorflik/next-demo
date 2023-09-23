'use client'
import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const GoogleButton = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/profile';
  return (
    <button onClick={() => signIn('google', {callbackUrl})}>Sign in with google</button>
  )
}

export default GoogleButton