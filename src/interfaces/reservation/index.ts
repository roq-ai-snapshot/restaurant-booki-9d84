import { TableInterface } from 'interfaces/table';
import { UserInterface } from 'interfaces/user';
import { RestaurantInterface } from 'interfaces/restaurant';
import { GetQueryInterface } from 'interfaces';

export interface ReservationInterface {
  id?: string;
  date: any;
  time: string;
  number_of_people: number;
  user_id: string;
  restaurant_id: string;
  created_at?: any;
  updated_at?: any;
  table?: TableInterface[];
  user?: UserInterface;
  restaurant?: RestaurantInterface;
  _count?: {
    table?: number;
  };
}

export interface ReservationGetQueryInterface extends GetQueryInterface {
  id?: string;
  time?: string;
  user_id?: string;
  restaurant_id?: string;
}
