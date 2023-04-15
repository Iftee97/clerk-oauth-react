import React from 'react'
import { Link } from 'react-router-dom'
import { SignIn, ClerkLoading, ClerkLoaded } from '@clerk/clerk-react'

export default function Login() {
  return (
    <>
      <ClerkLoading>
        <div>
          loading...
        </div>
      </ClerkLoading>
      <ClerkLoaded>
        <div className='my-6 flex items-center justify-center'>
          <SignIn routing='path' path='/sign-in' />
        </div>
      </ClerkLoaded>
      <div className='my-6 flex items-center justify-center'>
        <Link to="/">
          Home
        </Link>
      </div>
    </>
  )
}
