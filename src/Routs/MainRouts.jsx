import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../Pages/Dashboard'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
// import UserData from '../Pages/UserData'
import Products from '../Pages/Products'
import User from '../Pages/User'
import UserData from '../Component/UserData'
import PrivetRout from './PrivetRout'
import MainProductForm from '../Component/MainProductForm'
import MainSignupForm from '../Component/MainSignupForm'



function MainRouts() {
  return (
    <Routes>
        <Route path='/' element={
        <PrivetRout>
          <Dashboard/>
        </PrivetRout>
        }></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<MainSignupForm/>}></Route>
        <Route path='/userdata' element={
        <PrivetRout>
          <UserData/>
          </PrivetRout>}></Route>
        <Route path='/product' element={<PrivetRout>
          <Products/>
          </PrivetRout>}></Route>
        <Route path='/user' element={
        <PrivetRout>
          <User/>
          </PrivetRout>}></Route>
        <Route path='/productform' element={<MainProductForm/>}></Route>
        <Route path='*' element={<h1>Note Found</h1>}></Route>
    </Routes>
  )
}

export default MainRouts