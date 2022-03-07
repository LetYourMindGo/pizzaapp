import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { IMenuItem, IOrderInfo } from '../../types/types';
import './Order.css';

interface Props {
  menu: IMenuItem[]
  myOrders: IOrderInfo[]
}

const Order: React.FC<Props> = ({menu, myOrders}) => {
  const [order, setOrder] = useState<IOrderInfo>()

  const idFromParams: string | undefined = useParams().id?.substring(1)
  let id!: number;
  if(typeof idFromParams !== 'undefined') {
    id = parseInt(idFromParams, 10);
  };

  const getOrder = async () => {    
    const orderData = await axios.get(`https://private-anon-44d7ca3ab4-pizzaapp.apiary-mock.com/orders/${id}`);
    setOrder(orderData.data)
  };

  useEffect (() => {
    getOrder();
  }, []);

  
  return (
    <div className='order-page'>
      <h2 className='order-page__heading'>Your Order:</h2>
      <div className='order-page__info'>
        <p className='info__text'>Order ID: {order?.orderId}</p>
        <p className='info__text'>Total Price: {order?.totalPrice}</p>
        <p className='info__text'>Ordered At: {order?.orderedAt}</p>
        <p className='info__text'>Estimated Delivery: {order?.esitmatedDelivery}</p>
        <p className='info__text'>Status: {order?.status}</p>
      </div>
    </div>
  )
}

export default Order