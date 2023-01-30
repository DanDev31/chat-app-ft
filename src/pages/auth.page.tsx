import React from 'react'
import { Outlet } from 'react-router-dom'

export const AuthPage = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-blue-800'>
      <Outlet />
    </div>
  )
}
