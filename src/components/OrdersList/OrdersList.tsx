import React from 'react';
import { IOrderInfo } from '../../types/types';
import OrderCard from '../OrderCard/OrderCard';
import './OrdersList.css';

const Orders: React.FC = () => {

  let ordersFromStore: IOrderInfo[] = JSON.parse(localStorage.getItem('myOrders') || "");

  return (
    <div className='orders-page'>
      <h2 className={ordersFromStore.length < 1 ? 'hidden' : 'your-orders'}>Your Orders:</h2>
      <h2 className={ordersFromStore.length > 0 ? 'hidden' : 'no-orders'}>You have no orders yet.</h2>
      <div className='orders-page__container'>{ordersFromStore?.map(orderItem => 
          <OrderCard key={orderItem.orderId} orderItem={orderItem}/>
        )}
      </div>
    </div>
  );
};

export default Orders;