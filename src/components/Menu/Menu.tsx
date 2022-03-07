import React, { useState} from 'react';
import { ICartItem, IMenuItem } from '../../types/types';
import './Menu.css';

interface Props {
  menu: IMenuItem[];
  cart: ICartItem[];
  setCart(cart: ICartItem[]): void;
}

const Menu: React.FC<Props> = ({menu, cart, setCart}) => {
  const [menuItemQuantuty, setMenuItemQuantity] = useState<number>(0);

  const getQuantity = (e: React.FormEvent<HTMLInputElement>) => setMenuItemQuantity(parseInt(e.currentTarget.value, 10));
  
  const addToCart = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const cartItem: ICartItem = {
      menuItemID: parseInt(e.currentTarget.id, 10),
      quantity: menuItemQuantuty
    };

    setCart([...cart, cartItem]);
    setMenuItemQuantity(0);
    e.currentTarget.reset();
  }

  return (
    <div className='menu-container'>{menu.map(menuItem => {
      return (
        <form className='menu-container__item' key={menuItem.id} id={menuItem.id.toString()} onSubmit={addToCart}>
          <div className='item__info'>
            <p>{menuItem.name}</p>
            <p>{menuItem.price}kr</p>
          </div>
          <div className='item__order'>
            <input className='order__input' type='number' min='0' max='20' step='1' onChange={getQuantity}></input>
            <button className='order__cart-btn' type='submit'>Add to cart</button>
          </div>
        </form>
      )
      })}
    </div>
  )
}

export default Menu