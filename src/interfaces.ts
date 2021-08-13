export interface Coords {
  lat: number;
  lng: number;
}

export interface CityType {
  coords: Coords;
  name?: string;
  currWeather?: WeatherType;
  foreCast?: ForeCast[];
  foursquarePlaces?: FoursquareType[];
}

export interface City {
  // Tokyo: cityType | null;
  [key: string]: CityType;
}

export interface WeatherType {
  description: string;
  icon: string;
  temp: number;
  city?: string;
  time?: string;
  date: number;
}

export interface ForeCast {
  description: string;
  icon: string;
  temp: number;
  city: string;
  day?: number;
  date: number;
}

export interface WeatherBlend {
  weatherType: WeatherType;
  foreCast: ForeCast[];
}

export interface FoursquareType {
  name: string;
  cat: string;
  coords: Coords;
  address: string;
  icon: string;
}
