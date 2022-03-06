import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ICartItem, IMenuItem, IRestaurant } from '../../types/types';
import Menu from '../Menu/Menu';

interface Props {
  myLatitude: number;
  myLongitude: number;
  restaurants: IRestaurant[];
}

const Restaurant:React.FC<Props> = ({myLatitude, myLongitude, restaurants}) => {
  const [menu, setMenu] = useState<IMenuItem[]>([]);
  const [cart, setCart] = useState<ICartItem[]>([])
  
  const idFromParams: string | undefined = useParams().id?.substring(1)
  let id!: number;
  if(typeof idFromParams !== 'undefined') {
    id = parseInt(idFromParams, 10);
  };

  const getMenu = async () => {
    const menuData = await axios.get(`https://private-anon-44d7ca3ab4-pizzaapp.apiary-mock.com/restaurants/${id}/menu`);
    setMenu(menuData.data);
  };

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <div>
      <h3>{restaurants.find(x => x.id === id)?.name}</h3>
      <Menu key={id} menu={menu} cart={cart} setCart={setCart} />
      <button>Place order</button>
    </div>
  )
}

export default Restaurant