import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { IRestaurant } from '../../types/types';

interface Props {
  latitude: number|undefined,
  longitude: number|undefined
}

const Restaurants: React.FC<Props>= ({latitude, longitude}) => {
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);
  
  const getRestaurants = async() => {
    const restaurantList = await axios.get('https://private-anon-44d7ca3ab4-pizzaapp.apiary-mock.com/restaurants/')
    setRestaurants(restaurantList.data)
  }

  useEffect(() => {
    getRestaurants();
  }, [])

  return (
    <div>
      {restaurants.map(restaurant => (
        restaurant.name
      ))}
    </div>
  )
};

export default Restaurants;