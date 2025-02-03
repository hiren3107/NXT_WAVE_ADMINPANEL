import React from 'react';
import Data from '../Component/Data';
import UserData from '../Component/UserData';
import { useSelector } from 'react-redux';
import Skeleton from '../Component/Skeleton';
import Counter from '../Component/Counter';
import ProductChart from '../Component/ProductChart';

function Dashboard() {
  return (
    <div id='d'>
      <Counter/>
      <Data/>
        <ProductChart/>
      <UserData />
    </div>
  );
}
export default React.memo(Dashboard);
