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
      <div className='my-6'>
        <div className='flex items-center justify-center gap-3 mb-3'>
          <p className='text-center text-lg'>
            You are logged in as {' '}
            <span className='text-blue-500'>
              {user.firstName} {user.lastName}
            </span>
          </p>
          <img
            src={user?.imageUrl}
            alt='user avatar'
            className='w-10 h-10 rounded-full'
          />
        </div>
        <button
          className='text-lg text-red-500 hover:underline cursor-pointer'
          onClick={() => signOut()}
        >
          sign out
        </button>
      </div>
      <div className='my-6 flex items-center justify-center'>
        <Link to="/">
          Home
        </Link>
      </div>
    </>
  )
}
