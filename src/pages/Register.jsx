import React from 'react'
import { Link } from 'react-router-dom'
import { SignUp, ClerkLoading, ClerkLoaded } from '@clerk/clerk-react'

export default function Register() {
  return (
    <>
      <ClerkLoading>
        <div>
          loading...
        </div>
      </ClerkLoading>
      <ClerkLoaded>
        <div className='my-6 flex items-center justify-center'>
          <SignUp routing='path' path='/sign-up' />
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
