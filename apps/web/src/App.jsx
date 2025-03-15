import React from 'react'
// import { Button } from "@/components/ui/button"
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Auth from './pages/auth'
import Chat from './pages/chat'
import Profile from './pages/profile'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />}/>
        <Route path="/chat" element={<Chat />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="*" element={<Navigate to="/auth" />}/>
      </Routes>
    </BrowserRouter>
  )
}

// <div className="flex flex-col items-center justify-center min-h-svh">

export default App
