import React, { useEffect, useState } from 'react'
import { db, googleAuth } from '../Firebase/fire'
import { addDoc, collection } from 'firebase/firestore'
import { useDispatch, useSelector } from 'react-redux'
import { getDataUser, updateDataUser } from '../Redux/Reducers/LoginReducer/action'
import { Link, useNavigate } from 'react-router-dom'
import goog from '../assets/googel.png'

function Signup() {
    var dispatch = useDispatch()
    var navigate = useNavigate()
    var [obj, setObj] = useState({
        user: '',
        email: '',
        pass: ''
    })

    let color = "#rgb(86, 86, 86)"
    var [id, setId] = useState("")
    var [userErr, setUserErr] = useState(false)
    var [emailErr, setEmailErr] = useState(false)
    var [passErr, setPassErr] = useState(false)

    var emailregex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var passregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/


    function handelChange(h) {
        var { name, value } = h.target
        setObj({ ...obj, [name]: value })

    }

    function javTyare(h) {
        var { name, value } = h.target
        if (name == "user" && value.length < 5) {
            setUserErr(true)
        }

        if (name == "email" && !emailregex.test(value)) {
            setEmailErr(true)
        }

        if (name == "pass" && value.length < 8 && !passregex.test(value)) {
            setPassErr(true)
        }
    }

    function aavoTyare(h) {
        var { name, value } = h.target

        if (name == "user") {
            // console.log(value);
            setUserErr(false)
        }

        if (name == "email") {
            setEmailErr(false)
        }
        if (name == "pass") {
            setPassErr(false)
        }

    }
    function gayoData(j) {
        j.preventDefault()

        if (id == "") {
            if (userErr == false && emailErr == false && passErr == false) {
                // serArr([...arr,obj])
                userDataAdd(obj)
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                Toast.fire({
                    icon: "success",
                    title: "Sign Up successfully"
                });
                setTimeout(() => {

                    navigate('/login')
                }, 2000);
                setObj({
                    user: '',
                    email: '',
                    pass: ''
                })


            }
            else {

                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Fill The Data !",
                });
            }
        } else {
            if (userErr == false && emailErr == false && passErr == false) {
                dispatch(updateDataUser)(id, obj)
                console.log(id);
                localStorage.removeItem("chaki")
                localStorage.removeItem("userEditId")

                setObj({
                    user: '',
                    email: '',
                    pass: ''
                })
            }
        }
        dispatch(getDataUser)
    }

    var userDataAdd = async (obj) => {
        let userCollection = collection(db, "user");
        await addDoc(userCollection, obj)

    }

    var dataa = useSelector(st => st.loginReducer)
    useEffect(() => {
        dataa.user.forEach((el) => {
            if (el.id == localStorage.getItem("userEditId")) {
                setObj({ ...el })
                setId(el.id)
            }
        });

    }, [])

    function handelAuth() {
        googleAuth()
    }

    return (
        <>    <div className='mainsignup bg-[#100f21]'>
            <form id='signup' action="" onSubmit={gayoData}>
                <h1 className='h1'>Sign Up</h1>
                <input className='signupinput' type="text" value={obj.user} name='user' style={userErr == true ? { borderColor: "red" } : { borderColor: color }} placeholder='Enter Your User Name' onChange={handelChange} onBlur={javTyare} onFocus={aavoTyare} />
                {userErr == true ? <p className='p1'>Wrong User Name</p> : ""}

                <input className='signupinput' type="text" value={obj.email} name='email' style={emailErr == true ? { borderColor: "red" } : { borderColor: color }} placeholder='Enter Your Email' onChange={handelChange} onBlur={javTyare} onFocus={aavoTyare} />
                {emailErr == true ? <p className='p1'>Valid Email Id</p> : ""}

                <input className='signupinput' type="text" value={obj.pass} name='pass' style={passErr == true ? { borderColor: "red" } : { borderColor: color }} placeholder='Enter Your Password' onChange={handelChange} onBlur={javTyare} onFocus={aavoTyare} />
                {passErr == true ? <p className='p1'>Enter Strong Password</p> : ""}

                <input className='signupinputbtn' type="submit" value={localStorage.getItem("chaki") ? 'Edite' : 'Submit'} />
                <p className='mb-[10px]' id='ce'>OR</p>
                <div id='gg' onClick={handelAuth} className='googel text-center flex'>
                    <img src={goog} className='w-[25px] h-[25px] me-[20px]' alt="" />
                    Sign in with Google</div>
                <Link to={'/login'} className='center'> <p className="center mt-[20px]" id='alreadyaccountcss'>Account Already Exist</p></Link>
            </form>
        </div>

        </>

    )
}

export default Signup