import React, {useEffect} from 'react';
import axios from 'axios';
import {IOrderInfo, IRestaurant } from '../../types/types';
import RestaurantCard from '../RestaurantCard/RestaurantCard';

interface Props {
  myLatitude: number;
  myLongitude: number;
  restaurants: IRestaurant[];
  myOrders: IOrderInfo[],
  setRestaurants(restaurants: IRestaurant[]): void;
  setMyOrders(myOrders: IOrderInfo[]): void
}

const Home: React.FC<Props>= ({myLatitude, myLongitude, restaurants, setRestaurants, myOrders, setMyOrders}) => {

  useEffect(() => {
    window.localStorage.setItem('myOrders', JSON.stringify(myOrders));
  }, [myOrders]);

  useEffect(() => {
    setMyOrders(JSON.parse(localStorage.getItem('myOrders') || ""));
  }, []);

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
    window.localStorage.setItem('restaurants', JSON.stringify(restaurantList.data));
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
          <RestaurantCard key={restaurant.id} restaurant={restaurant}/>)
      )}
    </div>
  )
};

export default Home;