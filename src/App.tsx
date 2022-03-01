import React,{useEffect, useState} from 'react';
import Restaurants from './components/Rastaurants/Restaurants'
import './App.css';

const App: React.FC = () => {
  const [latitude, setLatitude] = useState<number>();
  const [longitude, setLongitude] = useState<number>();

  const getLocation = () => {
    const success = (position: GeolocationPosition) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    }

    const error = () => {
      console.log('something went wrong');
    }

    navigator.geolocation.watchPosition(success, error);
  }

  useEffect(() => {
    getLocation();
  }, [])

  return (
    <div className="App">
      <Restaurants latitude={latitude} longitude={longitude} />
    </div>
  );
}

export default App;
