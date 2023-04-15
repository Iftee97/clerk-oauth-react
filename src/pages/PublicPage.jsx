import React from 'react'
import { Link } from 'react-router-dom'

export default function PublicPage() {
  return (
    <>
      <h1 className='mb-3'>
        Public page
      </h1>
      <Link to="/protected">
        Go to protected page
      </Link>
    </>
  )
}
