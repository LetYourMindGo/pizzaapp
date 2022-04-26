import React from 'react';
import { ICartItem } from '../../types/types';
import './Cart.css';

interface Props {
  cart: ICartItem[];
  setCart(cart: ICartItem[]): void;
}

const Cart: React.FC<Props> = ({cart, setCart}) => {
  return (
    <div>Cart</div>
  )
};

export default Cart;