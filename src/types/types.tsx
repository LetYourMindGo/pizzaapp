export interface IRestaurant{
  id: number,
  name: string,
  address1: string,
  address2: string,
  latitude: number,
  longitude: number,
  distance: number
}

export interface IMenuItem{
  id: number,
  category: string,
  name: string,
  price: number,
  topping?: string[],
  rank?: number
}

export interface ICartItem{
  menuItemID: number,
  quantity: number
}