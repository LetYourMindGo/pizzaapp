import React, {useEffect, useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import { IRestaurant } from './types/types';
import Home from './components/Home/Home'
import Restaurant from './components/Restaurant/Restaurant';
import Orders from './components/Orders/Orders';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import './App.css';

const App: React.FC = () => {
  const [myLatitude, setMyLatitude] = useState<number>(0);
  const [myLongitude, setMyLongitude] = useState<number>(0);
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);

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
    <div className='pizza-app'>
      <div className='pizza-app__main-container'>
        <Routes>
          <Route path="/" element={(
            <>
              <Header />
              <Home myLatitude={myLatitude} myLongitude={myLongitude} restaurants={restaurants} setRestaurants={setRestaurants} />
              <Footer />
            </>
          )}/>
          <Route path="/restaurant/:id" element={(
            <>
              <Header />
              <Restaurant />
              <Footer />
            </>
          )}/>
          <Route path="/orders" element={(
            <>
              <Header />
              <Orders />
              <Footer />
            </>
          )}/>

        </Routes>
      </div>
    </div>
  );
}

export default App;
