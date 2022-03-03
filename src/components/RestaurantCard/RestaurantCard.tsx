import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IRestaurant } from '../../types/types';

interface Props {
  restaurant: IRestaurant
}

const RestaurantCard: React.FC<Props> = ({restaurant}) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/restaurant/:${restaurant.id}`)
  }

  return (
    <div>
      <h2 onClick={onClick}>{restaurant.name}</h2>
      <p>{restaurant.address1}</p>
      <p>{Math.round((restaurant.distance + Number.EPSILON) * 100) / 100}km</p>
    </div>
  )
}

export default RestaurantCard;