import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IOrderInfo } from '../../types/types';

interface Props {
  orderItem: IOrderInfo
}

const OrderCard: React.FC<Props> = ({orderItem}) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/orders/:${orderItem.orderId}`);
  };

  return (
    <div onClick={onClick}>
      <h2>Order ID: {orderItem.orderId}</h2>
      <p>Esitmated Delivery: {orderItem.esitmatedDelivery}</p>
      <p>Order Status: {orderItem.status}</p>
    </div>
  )
};

export default OrderCard;