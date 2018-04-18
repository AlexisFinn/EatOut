import {Price} from '../enums/price.enum';

export class Place {
  id: string;
  name: string;
  description: string;
  price: Price;
  address: string;
  rating: number;
}
