import React from 'react';
import { useParams } from 'react-router-dom';
import { IRestaurant } from '../../types/types';

interface Props {
  myLatitude: number;
  myLongitude: number;
  restaurants: IRestaurant[];
}

const Restaurant:React.FC<Props> = ({myLatitude, myLongitude, restaurants}) => {
  
  const idFromParams: string | undefined = useParams().id?.substring(1)
  let id!: number;
  if(typeof idFromParams !== 'undefined') {
    id = parseInt(idFromParams, 10)
  }

  return (
    <div>
      {restaurants.find(x => x.id === id)?.name}
    </div>
  )
}

export default Restaurant