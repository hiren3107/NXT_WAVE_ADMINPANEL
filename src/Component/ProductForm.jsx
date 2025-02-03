import React, { useEffect, useState } from 'react'
import { db } from '../Firebase/fire'
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore'
import { useDispatch, useSelector } from 'react-redux'
import { getData, updateData } from '../Redux/Reducers/ProductReducer/action'


function ProductForm() {
    var dispatch = useDispatch()
    let [obj, setobj] = useState({
        Title: "",
        price: "",
        URL: ""
    })

    var [id, setId] = useState("")

    function change(e) {
        let { name, value } = e.target
        setobj({ ...obj, [name]: value })
    }

    function sub(e) {
        e.preventDefault()
        if (id == "") {
            AddData(obj)

            Swal.fire({
                title: "Product Added Succsessfully......  ",
                icon: "success",
                draggable: true
            });
            setobj({
                Title: "",
                price: "",
                URL: ""
            })
        }
        else {
            dispatch(updateData)(id, obj)
            setobj({
                Title: "",
                price: "",
                URL: ""
            })
        }
        localStorage.removeItem("editId")
        dispatch(getData)
        localStorage.removeItem("chako")


    }


    var AddData = async (obj) => {

        let ProductCollection = collection(db, "Product");

        await addDoc(ProductCollection, obj)

    }

    var dataa = useSelector(st => st.productReducer)

    // console.log(dataa);
    useEffect(() => {
        dataa.arr.forEach((el) => {
            if (el.id == localStorage.getItem("editId")) {
                setobj({ ...el })
                setId(el.id)
            }
        });

    }, [])

    return (<div className='ProductFormMain'>
        <form action="" className='productForm' onSubmit={sub} >
            <h1 className='h1'>Product Form</h1>
            <input type="text" id='productInput' required placeholder='Product Title' onChange={change} name='Title' value={obj.Title} />    <br /> <br />
            <input type="text" id='productInput' required placeholder='Product Price' onChange={change} name='price' value={obj.price} />    <br /> <br />
            <input type="text" id='productInput' required placeholder='Product URL ' onChange={change} name='URL' value={obj.URL} />    <br /> <br />
            <input type="submit" id='productInputBtn' value={localStorage.getItem("chako") ? 'Edite' : 'Add Product'} className='  border p-[5px]   rounded-[10px] ' />

        </form>
    </div>
    )


}

export default ProductForm