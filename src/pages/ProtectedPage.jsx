import React from 'react'
import { Link } from 'react-router-dom'
import { useUser, useAuth } from "@clerk/clerk-react"

export default function ProtectedPage() {
  const { user } = useUser()
  const { signOut } = useAuth()

  return (
    <>
      <h1>
        Protected page
      </h1>
      <div className='my-4 flex items-center justify-center gap-2'>
        <p className='text-center text-lg'>
          You are logged in as {' '}
          <span className='text-blue-500'>
            {user.firstName} {user.lastName}
          </span>
        </p>
        <span
          onClick={() => signOut()}
          className='text-lg text-red-500 hover:underline cursor-pointer'
        >
          sign out
        </span>
      </div>
      <div className='my-6 flex items-center justify-center'>
        <Link to="/">
          Home
        </Link>
      </div>
    </>
  )
}
