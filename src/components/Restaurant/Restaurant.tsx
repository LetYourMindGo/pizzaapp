import React, {useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { ICartItem, IMenuItem, IOrder, IOrderInfo, IRestaurant } from '../../types/types';
import Menu from '../Menu/Menu';

const Restaurant:React.FC = () => {
  const [menu, setMenu] = useState<IMenuItem[]>([]);
  const [cart, setCart] = useState<ICartItem[]>([]);
  const [myOrders, setMyOrders] = useState<IOrderInfo[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart') || ""));
    setMyOrders(JSON.parse(localStorage.getItem('myOrders') || ""));
    getMenu();
  }, []);

  useEffect(() => {
    window.localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    window.localStorage.setItem('myOrders', JSON.stringify(myOrders));
  }, [myOrders]);

  let restFromStore: IRestaurant[] = JSON.parse(localStorage.getItem('restaurants') || "")
  
  const idFromParams: string | undefined = useParams().id?.substring(1)
  let id!: number;
  if(typeof idFromParams !== 'undefined') {
    id = parseInt(idFromParams, 10);
  };

  const getMenu = async () => {
    const menuData = await axios.get(`https://private-anon-44d7ca3ab4-pizzaapp.apiary-mock.com/restaurants/${id}/menu`);
    setMenu(menuData.data);
  };

  const placeOrder = async (e: React.SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const order: IOrder = {
      cart: cart,
      restaurantId: id
    };

    const response = await axios.post('https://private-anon-44d7ca3ab4-pizzaapp.apiary-mock.com/orders/', order);
    
    setMyOrders([...myOrders, response.data]);
    setCart([]);
    navigate('/orders')
  };

  return (
    <div>
      <h3>{restFromStore.find(x => x.id === id)?.name}</h3>
      <p>{restFromStore.find(x => x.id === id)?.distance}</p>
      <Menu key={id} menu={menu} cart={cart} setCart={setCart} />
      <button type='submit' onClick={placeOrder}>Place order</button>
    </div>
  )
}

export default Restaurant