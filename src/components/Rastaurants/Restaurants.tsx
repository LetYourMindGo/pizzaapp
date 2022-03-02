import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { IRestaurant } from '../../types/types';
import Restaurant from '../Restaurant/Restaurant';

interface Props {
  myLatitude: number,
  myLongitude: number
}

const Restaurants: React.FC<Props>= ({myLatitude, myLongitude}) => {
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);

  const getDistance = (myLat:number, myLon:number, restLat:number, restLon:number) => {
    var R = 6371;
    var dLat = deg2rad(restLat-myLat);
    var dLon = deg2rad(restLon-myLon); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(myLat)) * Math.cos(deg2rad(restLat)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c;
    return d;
  }
  
  const deg2rad = (deg: number) => {
    return deg * (Math.PI/180)
  }
  
  const getRestaurants = async() => {
    const restaurantList = await axios.get('https://private-anon-44d7ca3ab4-pizzaapp.apiary-mock.com/restaurants/')

    for (let i:number = 0; i < restaurantList.data.length; i++) {
      restaurantList.data[i]["distance"] = getDistance(myLatitude, myLongitude,restaurantList.data[i]["latitude"],restaurantList.data[i]["longitude"]);
    }
    setRestaurants(restaurantList.data)
  }

  useEffect(() => {
    getRestaurants();
  }, [myLatitude, myLongitude])

  restaurants.sort((a:IRestaurant, b:IRestaurant) => { 
    return a.distance - b.distance;
  });

  return (
    <div>
      {restaurants.sort((a:IRestaurant, b:IRestaurant) => { 
        return a.distance - b.distance;
        }).map(restaurant => (
          <Restaurant key={restaurant.id} restaurant={restaurant} />)
      )}
    </div>
  )
};

export default Restaurants;