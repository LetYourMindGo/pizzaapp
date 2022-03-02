import React from 'react'
import { IRestaurant } from '../../types/types'

interface Props {
  restaurant: IRestaurant
}

const Restaurant: React.FC<Props> = ({restaurant}) => {

  return (
    <div>
      <p>{restaurant.name}</p>
      <p>{restaurant.address1}</p>
      <p>{Math.round((restaurant.distance + Number.EPSILON) * 100) / 100}km</p>
    </div>
  )
}

export default Restaurant