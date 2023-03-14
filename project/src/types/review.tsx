import {User} from "./user";

export type review = {
  id: number;
  user: User;
  rating: number;
  comment: string;
  date: Date;
}
