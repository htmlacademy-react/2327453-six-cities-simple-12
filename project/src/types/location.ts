export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type Point = {
  id: number
} & Location

export type Points = Point[];
