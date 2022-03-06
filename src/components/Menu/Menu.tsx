import React, { useState } from 'react';
import { ICartItem, IMenuItem } from '../../types/types';

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
    window.localStorage.setItem('cart', JSON.stringify(cart));
    setMenuItemQuantity(0);
    e.currentTarget.reset();
  }


  return (
    <div>{menu.map(menuItem => {
      return (
        <form key={menuItem.id} id={menuItem.id.toString()} onSubmit={addToCart}>
          <p>{menuItem.id}</p>
          <p>{menuItem.name}</p>
          <p>{menuItem.price}kr</p>
          <input type='number' onChange={getQuantity}></input>
          <button type='submit'>Add to cart</button>
        </form>
      )
      })}
    </div>
  )
}

export default Menu