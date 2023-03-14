import {City} from './city';
import {User} from './user';
import {Location} from './location';

export type OfferType = 'room' | 'house' | 'apartment';

export type Offer = {
  city: City;
  previewImage: string;
  images: string[];
  title: string;
  isPremium: boolean;
  rating: number;
  type: OfferType;
  bedrooms: number;
  maxAdults: number;
  price: number;
  goods: string[];
  host: User;
  description: string;
  location: Location;
  id: number;
};

export type Offers = Offer[];
