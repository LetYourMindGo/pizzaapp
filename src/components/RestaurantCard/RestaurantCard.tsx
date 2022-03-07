import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IRestaurant } from '../../types/types';
import './RestaurantCard.css';

interface Props {
  restaurant: IRestaurant
}

const RestaurantCard: React.FC<Props> = ({restaurant}) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/restaurant/:${restaurant.id}`)
  }

  return (
    <div className='restaurant-card' onClick={onClick}>
      <h2 className='restaurant-card__name'>{restaurant.name}</h2>
      <div className='restaurant-card__subinfo'>
        <p>{restaurant.address1}</p>
        <p>{Math.round((restaurant.distance + Number.EPSILON) * 100) / 100}km</p>
      </div>
    </div>
  )
}

export default RestaurantCard;