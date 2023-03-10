import {City} from "./city";
import {Host} from "./host";
import {Location} from "./location";

export type OfferType = "room" | "house" | "apartment";

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
  host: Host;
  "description": string;
  location: Location;
  id: number;
}
