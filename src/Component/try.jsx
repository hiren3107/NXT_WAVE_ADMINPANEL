import React, { useEffect, useState } from 'react'
import { deleteData, getData } from '../Redux/Reducers/ProductReducer/action';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Skeleton from './Skeleton';

function Data() {
    var dispatch = useDispatch()
    var [view, setview] = useState([])

    var navigat = useNavigate()

    const [filterPrice, setFilterPrice] = useState('');  // State for price filter
    const [searchTitle, setSearchTitle] = useState('');  // State for search filter by title
    const [sortOrder, setSortOrder] = useState('');  // State for sorting order (asc or desc)

    useEffect(() => {
        dispatch(getData)
    }, [])

    var dataa = useSelector(st => st.productReducer)
    console.log(dataa.arr);
    // var dataa = useSelector(state => state.productReducer);

    // console.log("Loading Status:", dataa.isLoding);
    // console.log(dataa);

    function handelDelet(delId) {
        // console.log(delId);
        dispatch(deleteData(delId))
    }

    function handelEdite(editeId) {
        localStorage.setItem("editId", editeId)
        localStorage.setItem("chako", true)
        navigat("/product")

    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (e) => {
        //    setview([e]);
        console.log(e);
        let ss = dataa.arr.filter((el) => {

            if (el.id == e) {

                return el
            }
        })

        setview(ss)
        console.log(view);



        setIsModalOpen(true);
    }
    const closeModal = () => setIsModalOpen(false);






// Filter data based on selected price range, search title, and sorting
const filteredData = dataa.arr.filter((el) => {
    // Price filter logic
    const priceFilter = filterPrice ?
        el.price >= filterPrice.split('-')[0] && el.price <= filterPrice.split('-')[1]
        : true;

    // Title search filter logic (case-insensitive)
    const titleFilter = el.Title.toLowerCase().includes(searchTitle.toLowerCase());

    return priceFilter && titleFilter;
});

// Sort filtered data based on price and selected sort order (asc or desc)
const sortedData = filteredData.sort((a, b) => {
    if (sortOrder === 'asc') {
        return a.price - b.price; // Ascending order
    } else if (sortOrder === 'desc') {
        return b.price - a.price; // Descending order
    } else {
        return 0; // No sorting
    }
});

    return (
        <div   className='w-[100%] h-[700px] mb-[40px]    '>
            <div id='nnj' className='rounded-[10px] w-[100%]  border-[#808080] overflow-y-auto'>



                <div className='w-[100%] 2xl:w-[100%]   h-[75px] flex   items-center  border-[#808080]  border-t  justify-between p-[20px] border-b'>
                    <h1 className='text-[25px] font-bold '>Product Details</h1>

                    <div className='flex justify-evenly  hidden lg:flex  items-center w-[80%] '  >

                        {/* SORTING............................................ */}

                        <div className=''>
                            <label htmlFor='sortOrder' className='mr-2 text-[18px]  lg:inline-block   '>Sort by Price: </label>
                            <select
                                id='sortOrder'
                                value={sortOrder}
                                onChange={(e) => setSortOrder(e.target.value)}
                                className='p-2 border border-[gary] rounded-md bg-[black] '
                            >
                                <option value=''>Select Sort Order</option>
                                <option value='asc'>Price: Low to High</option>
                                <option value='desc'>Price: High to Low</option>
                            </select>
                        </div>

                        {/* Price Filter Section............................................ * */}
                        <div className=''>
                            <label htmlFor='priceFilter' className='mr-2 text-[18px]   hidden lg:inline-block '>Filter by Price: </label>
                            <select
                                id='priceFilter'
                                value={filterPrice}
                                onChange={(e) => setFilterPrice(e.target.value)}
                                className='p-2 border rounded-md bg-[black] '
                            >
                                <option value=''>Select Price Range</option>
                                <option value='0-1000'>₹0 - ₹1000</option>
                                <option value='1001-5000'>₹1001 - ₹5000</option>
                                <option value='5001-10000'>₹5001 - ₹10000</option>
                                <option value='10001-20000'>₹10001 - ₹20000</option>
                                <option value='20001-50000'>₹20001 - ₹50000</option>
                            </select>
                        </div>


                        {/* Search Bar Section............................................ *  */}
                        <div className=''>
                            <label htmlFor='searchTitle' className='mr-2 text-[18px]   hidden lg:inline-block '>Search by Title: </label>
                            <input
                                id='searchTitle'
                                type='text'
                                value={searchTitle}
                                onChange={(e) => setSearchTitle(e.target.value)}
                                placeholder='Search products by title'
                                className='p-2 border rounded-md'
                            />
                        </div>






                        <button onClick={() => { navigat("/productform") }} className='sidebtn  me-[10px] '>Add Product</button>
                    </div>
                    <button onClick={() => { navigat("/productform") }} className='sidebtn  lg:hidden  me-[10px] '>Add Product</button>

                </div>
                <div>
                    {/* .............................. */}


                    <div className='flex justify-between lg:hidden  items-center w-[70%] '  >

{/* SORTING............................................ */}

<div className=''>
    <label htmlFor='sortOrder' className='mr-2 text-[18px] me-[20px] lg:inline-block  hidden  '>Sort by Price: </label>
    <select
        id='sortOrder'
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
        className='p-2 border border-[gary] rounded-md bg-[black] '
    >
        <option value=''>Select Sort Order</option>
        <option value='asc'>Price: Low to High</option>
        <option value='desc'>Price: High to Low</option>
    </select>
</div>

{/* Price Filter Section............................................ * */}
<div className=''>
    <label htmlFor='priceFilter' className='mr-2 text-[18px]   hidden lg:inline-block '>Filter by Price: </label>
    <select
        id='priceFilter'
        value={filterPrice}
        onChange={(e) => setFilterPrice(e.target.value)}
        className='p-2 border rounded-md bg-[black] '
    >
        <option value=''>Select Price Range</option>
        <option value='0-1000'>₹0 - ₹1000</option>
        <option value='1001-5000'>₹1001 - ₹5000</option>
        <option value='5001-10000'>₹5001 - ₹10000</option>
        <option value='10001-20000'>₹10001 - ₹20000</option>
        <option value='20001-50000'>₹20001 - ₹50000</option>
    </select>
</div>


{/* Search Bar Section............................................ *  */}







{/* <button  id='addbt' onClick={() => { navigat("/productform") }} className='sidebtn  me-[10px] '>Add Product</button> */}
</div>

                    
                    {/* .............................. */}
                    
                </div>





                
                <div className='p-[20px] w-[1500px] 2xl:w-[100%]   rounded-[10px] '>
                    <div className='  w-[100%] bg-[#19191C]  h-[80px]  border-[#808080] rounded-[10px]  justify-between p-[20px] flex'>
                        <div className='w-[10%] h-[100%] flex items-center justify-center'>
                            <h1 className='text-[20px] uppercase font-medium'>Product</h1>
                        </div>
                        <div className='w-[18%] h-[100%] flex items-center justify-center'>
                            <h1 className='text-[20px] uppercase font-medium'>Product Name</h1>
                        </div>
                        <div className='w-[15%] h-[100%] flex items-center justify-center'>
                            <h1 className='text-[20px] uppercase font-medium'>Product Prise</h1>
                        </div>
                        <div className='w-[10%] h-[100%] flex items-center justify-center'>
                            <h1 className='text-[20px] uppercase font-medium'>Edit</h1>
                        </div>
                        <div className='w-[10%] h-[100%] flex items-center justify-center'>
                            <h1 className='text-[20px] uppercase font-medium'>Delete</h1>
                        </div>
                        <div className='w-[12%] h-[100%] flex items-center justify-center'>
                            <h1 className='text-[20px] uppercase font-medium'>More</h1>
                        </div>
                    </div>

                    {/* cart  */}
                    <div id='derr' className='scroll-smooth overflow-auto  border-[#808080]   h-[500px]'>
                        {dataa.isLoding ? <><Skeleton /> <Skeleton /> <Skeleton /> <Skeleton /> </> :sortedData.map((el) => {
                            return (
                                <div id='koko'  key={el.id} className='w-[100%] h-[80px] border-[#808080]  rounded-[10px] border-b  mt-[5px] justify-between p-[20px] flex'>
                                    <div className='w-[10%] h-[100%] flex items-center justify-center'>
                                        <img className='w-[40px] h-[40px]' src={el.URL} alt="" />
                                    </div>
                                    <div className='w-[18%] h-[100%] flex items-center justify-center'>
                                        <h1 className='text-[18px]'>{el.Title}</h1>
                                    </div>
                                    <div className='w-[15%] h-[100%] flex items-center justify-center'>
                                        <h1 className='text-[18px]'>₹{el.price}</h1>
                                    </div>
                                    <div className='w-[10%] h-[100%] flex items-center justify-center'>
                                        <button id='btn1' onClick={() => handelEdite(el.id)}>Edit</button>
                                    </div>
                                    <div className='w-[10%] h-[100%] flex items-center justify-center'>
                                        <button id='btn2' onClick={() => handelDelet(el.id)}>Delete</button>
                                    </div>
                                    <div className='w-[12%] h-[100%] flex items-center justify-center'>
                                        <h1 onClick={() => openModal(el.id)} className='text-[18px] text-blue-500 font-medium underline underline-offset-8'>View More</h1>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div style={modalBackdropStyle}>



                    <div className='w-[450px] bg-[#171717] h-[450px] flex flex-wrap justify-center items-evenly border-1'>
                        <img src={view[0].URL} alt="" className='absolute mt-[1%] mb-[1%]  w-[250px] h-[230px] z-30 ' />
                        <div className='w-[27%] mt-[60%] h-[5%]  flex items-center justify-center   z-20 '>
                            $   {view[0].price}  /-
                        </div>
                        <div className='w-[27%] ms-3 mt-[13vw] h-[5%] mt-[60%] flex items-center justify-center'>
                            {view[0].Title}

                        </div>
                        <div className='w-[59%]  h-[10%]  flex items-center justify-center text-center ' >
                            <p>

                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, dolores.
                            </p>
                        </div>
                        <div className='w-[50%] h-[5%]  flex items-center justify-center'>
                            {/* <img src="\Assets\rating.png" alt="" className='w-[45%]' /> */}
                            <i class="   text-[gold] fa-solid fa-star"></i>
                            <i class="   text-[gold] fa-solid fa-star"></i>
                            <i class="   text-[gold] fa-solid fa-star"></i>
                            <i class="   text-[gold] fa-solid fa-star"></i>
                            <i class="   text-[gold] fa-solid fa-star-half-stroke"></i>
                        </div>
                    </div>
                    <div style={modalStyle}>

                        {/* Close button */}
                        <button onClick={closeModal} style={closeButtonStyle}>X</button>
                    </div>
                </div>
            )}

        </div>
    )
}

const modalBackdropStyle = {
    position: 'fixed',
    width: "100%",
    top: 0,
    left: 0,
    color: "white",
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.47)',
    color: "white",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

const modalStyle = {
    backgroundColor: '',
    padding: '0px',

    border: "1px solid red",
    borderRadius: '8px',
    width: '1px',
    textAlign: 'center',
    position: 'relative',
};

const closeButtonStyle = {
    position: 'absolute',
    top: '-200px',
    right: '20px',
    background: 'transparent',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer',
};


export default Data