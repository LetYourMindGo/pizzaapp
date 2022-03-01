export interface IRestaurant{
  id: number,
  name: string,
  address1: string,
  address2: string,
  latitude: number,
  longitude: number
}

export interface IMenu{
  id: number,
  category: string,
  name: string,
  price: number,
  topping?: string[],
  rank?: number
}