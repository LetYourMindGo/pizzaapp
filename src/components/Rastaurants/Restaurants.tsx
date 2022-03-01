import React from 'react';
import axios from 'axios';

const Restaurants = () => {
  
  const getRestaurants = async() => {
    const restaurantList = await axios.get('https://private-anon-44d7ca3ab4-pizzaapp.apiary-mock.com/restaurants/')
    console.log(restaurantList.data);
  }

  const getLocation = () => {
    const success = (position: GeolocationPosition) => {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;

      console.log('lat', latitude);
      console.log('long', longitude);
    }

    const error = () => {
      console.log('something went wrong');
    }

    navigator.geolocation.getCurrentPosition(success, error);
  }

  return (
    <>
      <button onClick={getRestaurants}>Restaurants</button>
      <button onClick={getLocation}>Location</button>
    </>
  )
};

export default Restaurants;