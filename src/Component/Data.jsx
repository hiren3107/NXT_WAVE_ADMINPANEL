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
console.log(sortedData);

    return (
        <div className='w-[100%] h-[700px] mb-[150px]'>
            <div className='rounded-[10px] w-[100%] border overflow-y-auto'>
            <div className="w-full h-auto flex flex-col lg:flex-row items-center justify-between px-4 lg:px-6 py-4 border-b bg-[#181819] text-white space-y-4 lg:space-y-0">
    <h1 className="text-xl lg:text-2xl font-bold">Product Details</h1>

    <div className="flex flex-wrap justify-center lg:justify-end space-x-2 lg:space-x-4">
        <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="p-2 border rounded-md bg-gray-200 text-black hover:bg-gray-300 transition w-40 sm:w-48"
        >
            <option value="">Sort by Price</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
        </select>

        <select
            value={filterPrice}
            onChange={(e) => setFilterPrice(e.target.value)}
            className="p-2 border rounded-md bg-gray-200 text-black hover:bg-gray-300 transition w-40 sm:w-48"
        >
            <option value="">Filter by Price</option>
            <option value="0-1000">₹0 - ₹1000</option>
            <option value="1001-5000">₹1001 - ₹5000</option>
            <option value="5001-10000">₹5001 - ₹10000</option>
        </select>

        <input
            type="text"
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
            placeholder="Search by title"
            className="p-2 border rounded-md bg-gray-200 text-black hover:bg-gray-300 transition w-40 sm:w-48"
        />

        <button
            onClick={() => navigat("/productform")}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition w-40 sm:w-auto"
        >
            Add Product
        </button>
    </div>
</div>

                <div className='p-[20px] w-[1500px] 2xl:w-[100%] '>
                <div className="bg-gray-700 text-white py-4 px-6 rounded-t-lg flex justify-between">
                        <h1 className="w-1/5 text-center">Product</h1>
                        <h1 className="w-1/5 text-center">Name</h1>
                        <h1 className="w-1/5 text-center">Price</h1>
                        <h1 className="w-1/5 text-center">Actions</h1>
                    </div>

                    {/* cart  */}
                    <div className="p-6">
                    {/* <div className="bg-gray-700 text-white py-4 px-6 rounded-t-lg flex justify-between">
                        <h1 className="w-1/5 text-center">Product</h1>
                        <h1 className="w-1/5 text-center">Name</h1>
                        <h1 className="w-1/5 text-center">Price</h1>
                        <h1 className="w-1/5 text-center">Actions</h1>
                    </div> */}

                    <div className="h-[500px] overflow-auto">
                        {dataa.isLoding ? (
                            <> <br />
                                <Skeleton />
                                <Skeleton />
                                <Skeleton />
                                <Skeleton />
                            </>
                        ) : (
                            sortedData.map((el) => (
                                <div
                                    key={el.id}
                                    className="flex justify-between items-center p-4 border-b hover:bg-[#46464A] transition"
                                >
                                    <div className="w-1/5 text-center">
                                        <img
                                            src={el.URL}
                                            alt=""
                                            className="w-14 h-14 mx-auto rounded-md"
                                        />
                                    </div>
                                    <div className="w-1/5 text-center">
                                        {el.Title}
                                    </div>
                                    <div className="w-1/5 text-center">
                                        ₹{el.price}
                                    </div>
                                    <div className="w-1/5 flex justify-center space-x-2">
                                        <button
                                            onClick={() => handelEdite(el.id)}
                                            className="bg-yellow-500 px-3 py-1 rounded hover:bg-yellow-600 transition me-[10px]"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handelDelet(el.id)}
                                            className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition  me-[20px]"
                                        >
                                            Delete
                                        </button>
                                        <button
                                            onClick={() => openModal(el.id)}
                                            className="text-blue-600 underline hover:text-blue-800 transition cursor-pointer"
                                        >
                                            View More
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
                </div>
            </div>

            {isModalOpen && (
                <div style={modalBackdropStyle}>



                    <div className='w-[450px] bg-[#171717] h-[450px] flex flex-wrap justify-center items-evenly border-1'>
                        <img src={view[0].URL} alt="" className='absolute mt-[1%] mb-[1%]  w-[250px] h-[230px] z-30 ' />
                        <div className='w-[100%] text-[18px] mt-[60%] h-[5%] flex items-center justify-center   z-20 '>
                           <p className=''> {view[0].Title} </p>
                        </div>
                        <div className='w-[100%] ms-3 text-[18px]  h-[5%] flex items-center justify-center'>
                        ₹ {view[0].price}
                        </div>
                        <div className='w-[59%]  h-[10%]  flex items-center justify-center text-center ' >
                            <p>

                            Stylish and comfortable {[view[0].Title]}, designed for everyday wear and available in multiple sizes and colors

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
                        <button onClick={closeModal} style={closeButtonStyle}>
                        <i class="fa-solid fa-xmark text-[red]"></i>
                        </button>
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