import React from 'react';
import Data from '../Component/Data';
import UserData from '../Component/UserData';
import { useSelector } from 'react-redux';
import Skeleton from '../Component/Skeleton';
import Counter from '../Component/Counter';
import ProductChart from '../Component/ProductChart';

function Dashboard() {
  // Ensure correct property name
  // const dataa = useSelector(state => state.productReducer);

  // console.log("Loading Status:", dataa?.isLoding);

  return (
    <div id='d'>
      {/* {dataa?.isLoading ? <Skeleton /> : <Data />} */}
      <Counter/>
      <Data/>
      {/* <Skeleton/> */}
      {/* <div className='h-[500px]'> */}
        <ProductChart/>
      {/* </div> */}
      <UserData />

    </div>
  );
}

export default React.memo(Dashboard);
