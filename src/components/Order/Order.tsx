import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { IMenuItem, IOrderInfo } from '../../types/types';

interface Props {
  menu: IMenuItem[]
}

const Order: React.FC<Props> = ({menu}) => {
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
    <div>
      <p>Order ID: {order?.orderId}</p>
      <p>Total Price: {order?.totalPrice}</p>
      <p>Ordered At: {order?.orderedAt}</p>
      <p>Estimated Delivery: {order?.esitmatedDelivery}</p>
      <p>Status: {order?.status}</p>
    </div>
  )
}

export default Order