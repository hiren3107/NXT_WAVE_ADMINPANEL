import { useState } from 'react';
import './App.css'
import MainRouts from './Routs/MainRouts'
import { Link, useNavigate } from 'react-router-dom';

function App() {

  
  const [isOpen, setIsOpen] = useState(false);

  

  var navigate = useNavigate()

  // const [Ii, setIi] = useState(false)

  function handelLogout(){
    localStorage.removeItem("isLogin")
    localStorage.removeItem("isUser")
    localStorage.removeItem("isUserEmail")
    navigate('/login')
  }

  

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }



  return (
    <>
      <div className=" mmm w-[100%]  h-auto flex relative ">

      <div
          id="sidebars"
          className={`bg-[#181819] h-auto sm:w-[100%] absolute lg:static transition-all duration-500 ease-in-out ${isOpen ? 'lg:w-[15%] w-[60%] sm:right-[100%] lg:right-[0]' : 'lg:w-[4%] xl:ps-[2%] xl:w-[6%] w-0  ms-[-50px] sm:w-[350px]'
            }`}
        >




          {isOpen ? <div id="toggle_div" className={`  ${isOpen ? "block" : "hidden"}     `}     >


            <Link to={'/'}>
            <div id="Logo" className="w-[100%] h-[80px] flex justify-center items-center">
              <img src="src\assets\hh.png" className='' alt="" />
            </div>

          </Link>
            {isOpen && (
              <button
                id="bt"
                className="lg:absolute top-[0] sm:hidden absolute left-[80%] lg:left-[10%]"
                onClick={toggleSidebar}
              >
                ❌
              </button>
            )}

            {!isOpen && (
              <button
                id="bt"
                className="sm:absolute lg:left-[-95%] absolute lg:hidden top-[0] right-[0]"
                onClick={toggleSidebar}
              >
                ❌
              </button>
            )}
            <Link to={'/'}>
            <div className="w-[100%] h-[50px] mt-[30px] ps-[5%] pe-[5%] flex justify-between items-center hover:bg-[#46464A] hover:text-white transition-colors duration-300" id="register">
              <div className="w-[20%] h-[100%] flex justify-center items-center">
                <i className="fa-solid fa-laptop text-[24px]"></i>
              </div>
              <div className="w-[60%] h-[100%] flex justify-center items-center">
                <p>Dashboard</p>
              </div>
              <div className="w-[20%] h-[100%]"></div>
            </div>
            </Link>
          
              <Link to={'/login'}>
            <div className="w-[100%] h-[50px] mt-[7px] ps-[5%] pe-[5%] flex justify-between items-center hover:bg-[#46464A] hover:text-white transition-colors duration-300" id="Items">
              <div className="w-[20%] h-[100%] flex justify-center items-center">
                <i className="fa-solid fa-user text-[24px]"></i>
              </div>
              <div className="w-[60%] h-[100%] flex justify-center items-center">
                {/* <p className='cursor-pointer' onClick={() => itemss()} > Items  </p> */}
                <p>Login</p>
              </div>
              <div className="w-[20%] h-[100%]"></div>
            </div>
            </Link>
                <Link to={'/product'}>
            <div className="w-[100%] h-[50px] mt-[7px] ps-[5%] pe-[5%] flex justify-between items-center hover:bg-[#46464A] hover:text-white transition-colors duration-300" id="Items">
              <div className="w-[20%] h-[100%] flex justify-center items-center">
                <i className="fa-solid fa-qrcode text-[24px]"></i>
              </div>
              <div className="w-[60%] h-[100%] flex justify-center items-center">
                {/* <p className='cursor-pointer' onClick={() => itemss()} > Items  </p> */}
                <p>Product</p>
              </div>
              <div className="w-[20%] h-[100%]"></div>
            </div>
            </Link>

                <Link to={'/user'}>
            <div className="w-[100%] h-[50px] mt-[7px] ps-[5%] pe-[5%] flex justify-between items-center hover:bg-[#46464A] hover:text-white transition-colors duration-300" id="Items">
              <div className="w-[20%] h-[100%] flex justify-center items-center">
                <i className="fa-solid fa-users text-[24px]"></i>
              </div>
              <div className="w-[60%] h-[100%] flex justify-center items-center">
                {/* <p className='cursor-pointer' onClick={() => userss()}   >User</p> */}
                <p>user</p>
              </div>
              <div className="w-[20%] h-[100%]"></div>
            </div>
            </Link>
          </div> : <div id="minidiv">


            <button
              id="bt"
              className="sm:absolute lg:left-[-95%] absolute lg:hidden top-[0] right-[0]"
              onClick={toggleSidebar}
            >
              ❌
            </button>
            <Link to={'/'}>

            <div id="Logo" className="w-[100%] h-[80px] flex   justify-center items-center">
              {/* <i className="fa-regular fa-chess-king text-[35px] "></i> */}
              <img src="src\assets\h.png" alt="" />
            </div>
            </Link>

            {/* dashboard........................... */}
            <div id="Dashbb" className="w-[100%] h-[80px] flex   justify-center items-center">
            <Link to={'/'}>
              <i className="fa-solid fa-laptop text-[24px]"></i>
              </Link>
            </div>

            {/* Register........................... */}
            <div id="Registerr" className="w-[100%] h-[80px] flex   justify-center items-center">
            <Link to={'/login'}>
              <i className="fa-solid fa-user text-[24px]"></i>
              </Link>

            </div>


            {/* Items........................... */}
            <div id="Itemss" className="w-[100%] h-[80px] flex   justify-center items-center">
            <Link to={'/product'}>
              <i className="fa-solid fa-qrcode text-[24px]"></i>

              </Link>
            </div>

            {/* User........................... */}
            <div id="Userss" className="w-[100%] h-[80px] flex   justify-center items-center">
              <Link to={'/user'}>
              <i className="fa-solid fa-users text-[24px]"></i>

              </Link>


            </div>




          </div>
          }


        </div>

        {/* ................................................................. */}

        {/* Main Content Section */}
        <div
          id="div"
          className={`bg-[#28282A] h-[100vh] overflow-auto scroll-smooth transition-all duration-500 ease-in-out ${isOpen ? 'lg:w-[100%] w-[100%]' : 'w-[100%]'}`}
        >

{/* Navbar ............ */}

<div id="Navbar" className="w-[100%] h-[80px] bg-[#181819]">
        

        
         
        <div className='w-[100%] h-[75px] lg:ps-[20px] pe-[1px] lg:pe-[20px] flex justify-between items-center '>
        
        
        
        <button id="bt" onClick={toggleSidebar} className=" h-[100%]  flex justify-between items-center ">
          <i class="fa-solid fa-bars text-[30px] cursor-pointer "></i>
        </button>
        
        
                <div className='w-[35%] ms-[30px] md:w-[50%] h-[auto] sm:block hidden text-[#95989F]'>
                  <h1 id='H1' className='text-[4vw] sm:text-[3vw] md:text-[2.3vw] lg:text-[2vw]'>
                    Welcome {localStorage.getItem("isUser")?localStorage.getItem("isUser"):"User"} 
                    <i id='icon1' class="fa-solid fa-hand ms-[15px]"></i>
                  </h1>
                  <p id='P1' className='text-[2vw] sm:text-[1.7vw] md:text-[1.7vw] lg:text-[1.6w]  hidden  md:block xl:text-[1.4vw]'>Here’s what’s happening with your store today.</p>
                </div>
        
        
        
                <div className='flex w-[85%] sm:w-[50%] h-[70%] lg:w-[60%] h-[70%] lg:justify-end  items-center justify-evenly '>
                  <div className='w-[70%] sm:w-[40%] h-[100%] ms-[-10px] lg:ms-[1px]   flex items-center justify-evenly'>
                  <div id='inputDiv'>
                    <i class="fa-solid fa-magnifying-glass text-[15px]" id='searchicon'></i>
                    <input className='w-[70%] h-[30px]  sm:w-[90%] sm:ms-[5px]  lg:h-[35px] lg:w-[300px] text-[1.3vw]' id='appinput' type="text" placeholder='Search' /> </div>
                    </div>
        
                    {/* <div className="gol hidden ">
                    <div className="gol1">
                        <i className="fa-regular fa-star" id="golicon"></i>
                    </div>
                    <div className="gol1">
                        <i className="fa-solid fa-moon" id="golicon"></i>
                    </div>
                    <div className="gol1">
                        <i className="fa-solid fa-bell" id="golicon"></i>
                    </div>
                </div> */}
                  {/* <div className='flex items-center w-[120px] lg:w-[125px] xl:w-[200px]'>
                    <i id='icon2' class="  hidden ms-2 lg:ms-0 text-center fa-regular fa-star md:text-[2vw]  lg:text-[1.6vw] lg: text-[2.4vw]"></i>
                    <i id='icon2' class="  hidden ms-2 lg:ms-4 lg:pt-[0.5vw] pt-[1vw] text-center fa-solid fa-moon md:text-[2vw]"></i>
                    <i id='icon2' class="  hidden ms-2 lg:ms-4 lg:pt-[0.5vw] pt-[1vw] text-center fa-solid fa-bell md:text-[2vw]"></i>
                  </div> */}
        
        
        <div className='flex h-[100%]  justify-center items-center' >
        
        
        
                  {/* <div className='ms-[4vw] hidden sm:block w-[44px] h-[80%] rounded-[50%] bg-[#3E3E42] sm:flex lg:flex items-center justify-center uppercase' > 
                   
                  </div> */}
                  {/* <div className=' w-[100px] rounded-[10px]  hidden  h-[80%] bg-[#3E3E42] sm:flex justify-center items-center ms-[10px] '>
                    {localStorage.getItem("isUser")?localStorage.getItem("isUser"):"User"}
                  </div> */}
                  <div class="babo">
                    <div className='ms-[4vw] hidden sm:block w-[44px] h-[44px] rounded-[15px] bg-[#3E3E42] sm:flex lg:flex items-center justify-center uppercase'>
                    {localStorage.getItem("isUser")?localStorage.getItem("isUserEmail"):"🧑‍💻"}
                    </div>
                    <div className=' w-[100px]  hidden  h-[80%] sm:flex items-center ms-[10px]' id='hover'>
                    <h5 id="text">{localStorage.getItem("isUser")?localStorage.getItem("isUser"):"User"}</h5>
                  </div>
                </div>
                  <Link > 
                  <button onClick={handelLogout} className='cursor-pointer text-[14px] bg-[#3E3E42]  rounded-[20px] w-[110px] lg:w-[120px]  h-[45px] lg:ms-[10px]' id='logHover'>LOGOUT <i class="fa-solid fa-right-from-bracket ms-2"></i></button>
                  </Link>
                  </div>
        
                </div>
              </div>
        
        
        
                  </div>


          
     
          <div  className='scroll-smooth h-[91.5vh]  overflow-auto ' >
         

        <MainRouts/>
  
</div>
          {/* {Ii ? <ItemsForm /> : (usee ? <User /> : (reg ? <Login /> : <Data />))} */}
          {/* {Ii ? <ItemsForm /> : (usee ? <User /> : (reg ? <Login /> : <Data />))} */}
          {/* {Ii ? <ItemsForm /> : (usee ? <User /> : (reg ? <Login /> : <Data />))} */}

          {/* {Ii ? <ItemsForm /> :  usee ? <User />  : reg  ? < Login />   : <Data />   } */}


        </div>
      </div>

    </>
  )
}

export default App
