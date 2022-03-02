import React,{useEffect, useState} from 'react';
import Restaurants from './components/Rastaurants/Restaurants'
import './App.css';

const App: React.FC = () => {
  const [myLatitude, setMyLatitude] = useState<number>(0);
  const [myLongitude, setMyLongitude] = useState<number>(0);

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
    <div className="App">
      <Restaurants myLatitude={myLatitude} myLongitude={myLongitude} />
      <p>Your position: Lat:{myLatitude}, Long:{myLongitude}</p>
    </div>
  );
}

export default App;
