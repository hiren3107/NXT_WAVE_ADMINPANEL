import React, { useEffect } from 'react'
import Signup from './Signup'
import { useDispatch, useSelector } from 'react-redux'
import { deleteDataUser, getDataUser } from '../Redux/Reducers/LoginReducer/action'
import Skeleton from '../Component/Skeleton'

function User() {

  var dispatch = useDispatch()
  var dataa = useSelector(st => st.loginReducer)
  console.log(dataa.isLoding);

  useEffect(() => {
    dispatch(getDataUser)
  }, [])

  function handelDelet(delId) {
    dispatch(deleteDataUser(delId))
  }
  return (
    <div className='w-[100%] h-[100vh]'>

      {/* user add form  */}

      <div className='w-[100%] h-[auto] flex justify-center mb-[10px] mt-[10px]'>
        <Signup />
      </div>

      <div className='rounded-[10px] w-[100%] border overflow-y-auto'>
        <div className='w-[1300px] 2xl:w-[100%] h-[75px] flex items-center p-[20px] border-b'>
          <h1 className='text-[25px] font-bold '>User Data</h1>
        </div>
        <div className='p-[20px] w-[1300px] 2xl:w-[100%] flex justify-between flex-wrap'>

          {/* card  */}

          {dataa.isLoding ? <><Skeleton /><Skeleton /><Skeleton /></> : dataa.user.map((el) => {
            return <div key={el.id} className='w-[19%] md:w-[15%] h-[250px] border justify-between p-[10px] flex flex-wrap mb-[25px]'>
              <div className=' w-[100%] h-[40%] flex justify-center'>
                <h1 className='text-[40px] bg-[gray]  h-[100px] rounded-[50%] w-[100px]  text-center  flex justify-center uppercase  items-center'>{el.email.slice(0, 2)}</h1>
              </div>
              <div className='flex justify-center w-[100%] mt-[10px]'>
                <h1 className='text-[16px]'>{el.user}</h1>
              </div>
              <div className='flex justify-center  w-[100%]'>
                <h1 className='text-[16px]'>{el.email}</h1>
              </div>
              <div className='flex justify-center  w-[100%]'>
                <button id='btn22' onClick={() => handelDelet(el.id)}>Delete</button>
              </div>
            </div>
          })
          }
        </div>
      </div>
    </div>
  )
}

export default User