import React from 'react'
import { Navigate } from 'react-router-dom'

function PrivetRout({children}) {
  return (
    <div>
    {localStorage.getItem("isLogin") ? children  : <Navigate to={"/login"}/>    }
</div>
  )
}

export default PrivetRout