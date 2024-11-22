import React from 'react'
import OrderTable from './Order/OrderTable.jsx';

const Orders = () => {
  return (
    <div>
      <h1 className="text-4xl text-center p-5 font-semibold">Orders</h1>
      <OrderTable></OrderTable>
    </div>
  );
}

export default Orders