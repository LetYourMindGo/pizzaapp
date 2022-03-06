import React, { useEffect } from 'react';
import { IOrderInfo } from '../../types/types';
import OrderCard from '../OrderCard/OrderCard';

// interface Props {
//   myOrders: IOrderInfo[]
// }

const Orders: React.FC = () => {

  let ordersFromStore: IOrderInfo[] = JSON.parse(localStorage.getItem('myOrders') || "");

  return (
    <div>{ordersFromStore?.map(orderItem => 
        <OrderCard key={orderItem.orderId} orderItem={orderItem}/>
      )}
    </div>
  );
};

export default Orders;