import { Link } from "react-router-dom"
import {
  SignIn,
  SignInButton,
  SignedIn,
  SignedOut,
  useUser,
  useAuth
} from "@clerk/clerk-react"
import './App.css'

export default function PrevApp() {
  const { user } = useUser()
  const { signOut } = useAuth()

  console.log('user: >>>>>>>>>>>>', user)

  return (
    <div className="App">
      {!user ? (
        <>
          <div className='my-6 flex items-center justify-center'>
            <SignIn />
          </div>
          {/* <SignInButton /> */}
          {/* <SignInButton>
            <button className="text-[1.25rem] font-bold">
              Sign in with OAuth
            </button>
          </SignInButton> */}
        </>
      ) : (
        <>
          <h3 className="text-3xl font-semibold mb-3">
            Hi {user.fullName}!
          </h3>
          <button onClick={() => signOut()} className="text-[1.25rem] font-bold">
            Sign Out
          </button>
        </>
      )}
      <SignedIn>
        <h3 className="mt-4 text-xl font-semibold">
          Welcome! This is protected data. SHHHHHHHH! 🤫
        </h3>
      </SignedIn>
      <SignedOut>
        <h3 className="mt-4 mb-1 text-xl font-semibold">
          Please sign in to view protected data.
        </h3>
        <p className="font-light text-base">
          ** This content is visible only to signed out users. **
        </p>
      </SignedOut>
      <div className='my-6 flex items-center justify-center'>
        <Link to="/">
          Home
        </Link>
      </div>
    </div>
  )
}
