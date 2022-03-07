import React, { useEffect } from 'react';
import { IOrderInfo } from '../../types/types';
import OrderCard from '../OrderCard/OrderCard';

interface Props {
  myOrders: IOrderInfo[]
};

const Orders: React.FC<Props> = ({myOrders}) => {

  let ordersFromStore: IOrderInfo[] = JSON.parse(localStorage.getItem('myOrders') || "");

  return (
    <div>
      <h2 className={ordersFromStore.length < 1 ? 'hidden' : 'no-orders'}>You have no orders yet</h2>
      <div>{ordersFromStore?.map(orderItem => 
          <OrderCard key={orderItem.orderId} orderItem={orderItem}/>
        )}
      </div>
    </div>
  );
};

export default Orders;