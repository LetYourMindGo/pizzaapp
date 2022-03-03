import React, {useEffect, useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home'
import Restaurant from './components/Restaurant/Restaurant';
import './App.css';
import { IRestaurant } from './types/types';

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
    <div className='App'>
      <div className='App__main-container'>
        <Routes>
          <Route path="/" element={(
            <>
              <Home myLatitude={myLatitude} myLongitude={myLongitude} restaurants={restaurants} setRestaurants={setRestaurants} />
              <p>Your position: Lat:{myLatitude}, Long:{myLongitude}</p>
            </>
          )}/>
          <Route path="/restaurant/:id" element={(
            <>
              <Restaurant myLatitude={myLatitude} myLongitude={myLongitude} restaurants={restaurants} />
              <p>Your position: Lat:{myLatitude}, Long:{myLongitude}</p>
            </>
          )}/>

        </Routes>
      </div>
    </div>
  );
}

export default App;
