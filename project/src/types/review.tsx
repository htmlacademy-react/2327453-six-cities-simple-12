import {Host} from "./host";

export type review = {
  id: number;
  user: Host;
  rating: number;
  comment: string;
  date: Date;
}
