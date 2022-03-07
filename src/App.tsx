import React, {useEffect, useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import { ICartItem, IMenuItem, IOrderInfo, IRestaurant } from './types/types';
import Home from './components/Home/Home'
import Restaurant from './components/Restaurant/Restaurant';
import OrdersList from './components/OrdersList/OrdersList';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Order from './components/Order/Order';
import Navbar from './components/Navbar/Navbar';
import './App.css';

const App: React.FC = () => {
  const [myLatitude, setMyLatitude] = useState<number>(0);
  const [myLongitude, setMyLongitude] = useState<number>(0);
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);
  const [menu, setMenu] = useState<IMenuItem[]>([]);
  const [cart, setCart] = useState<ICartItem[]>([]);
  const [myOrders, setMyOrders] = useState<IOrderInfo[]>([]);

  const watchLocation = () => {
    const success = (position: GeolocationPosition) => {
      setMyLatitude(position.coords.latitude);
      setMyLongitude(position.coords.longitude);
    }

    const error = () => {
      console.log('something went wrong');
    }

    navigator.geolocation.watchPosition(success, error);
  }

  useEffect(() => {
    watchLocation();
  }, [])

  return (
    <div className='pizza-app__main-container'>
      <div className='main-container__wrapper'>
        <Navbar />
        <Header />
        <div className='page-content'>
          <Routes>
            <Route path="/" element={(
              <Home myLatitude={myLatitude} myLongitude={myLongitude} restaurants={restaurants} setRestaurants={setRestaurants} myOrders={myOrders} setMyOrders={setMyOrders} />
            )}/>
            <Route path="/restaurant/:id" element={(
              <Restaurant menu={menu} setMenu={setMenu} cart={cart} setCart={setCart} myOrders={myOrders} setMyOrders={setMyOrders} />
            )}/>
            <Route path="/orders" element={(
              <OrdersList />
            )}/>
            <Route path="/orders/:id" element={(
              <Order menu={menu} myOrders={myOrders} />
            )}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
