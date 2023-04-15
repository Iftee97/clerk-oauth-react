import { Routes, Route, Navigate } from "react-router-dom"
import { useUser } from "@clerk/clerk-react"

// pages
import PublicPage from "./pages/PublicPage"
import ProtectedPage from "./pages/ProtectedPage"
import Login from "./pages/Login"
import Register from "./pages/Register"
import PrevApp from './PrevApp'

import './App.css'

export default function App() {
  const { user } = useUser()
  console.log('user: >>>>>>>>>>>>', user)

  return (
    <>
      <div className="App">
        <h1 className="font-bold mb-6">
          Vite + React + Clerk Auth
        </h1>
      </div>
      <Routes>
        <Route path="/" element={<PublicPage />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/protected" element={user ? <ProtectedPage /> : <Navigate to='/sign-in' />} />
        <Route path="/prev-app" element={<PrevApp />} />
      </Routes>
    </>
  )
}
