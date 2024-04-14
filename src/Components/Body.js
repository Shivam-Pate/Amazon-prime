import React from 'react'
import Login from './Login'
import { Route, Routes } from 'react-router-dom'
import Frontpage from './Frontpage'
import Createaccount from './Createaccount'

const Body = () => {
  return (
    <div>
         <Routes>
            <Route path="/" element={<Frontpage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/createaccount" element={<Createaccount />} />
        </Routes>
    </div>
  )
}

export default Body