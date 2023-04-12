import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SignInButton, useUser, useAuth } from "@clerk/clerk-react"

export default function App() {
  const { user } = useUser()
  const { signOut } = useAuth()

  console.log('user: >>>>>>>>>>>>', user)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {!user ? (
        // <SignInButton />
        <SignInButton>
          <button
            style={{
              fontSize: '1.25rem',
              fontWeight: 'bold'
            }}
          >
            Sign in with OAuth
          </button>
        </SignInButton>
      ) : (
        <>
          <h3>
            Hi {user.fullName}!
          </h3>
          <button
            onClick={() => signOut()}
            style={{
              fontSize: '1.25rem',
              fontWeight: 'bold'
            }}
          >
            Sign Out
          </button>
        </>
      )}
    </div>
  )
}
