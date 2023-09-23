'use client';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation'
import React from 'react'

export const SignIn = () => {
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const res = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false
    })

    if(res && !res.error ) {
      router.push('/profile')
    }



  }

  return (
    <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        name="email"
        required
      />
    </div>
    <div>
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        required
      />
    </div>
    <div>
      <button type="submit">Sign in</button>
    </div>
  </form>
  )
}
