export interface coords {
  lat: number;
  lng: number;
}

export interface cityType {
    coords: coords;
    name?: string;
    currWeather?: weatherType;
    foreCast?: foreCast[];
    foursquarePlaces?: foursquareType[];
  }

export interface city {
    // Tokyo: cityType | null;
    [key: string]: cityType;
  }

export interface weatherType {
    description: string;
    icon: string;
    temp: number;
    city?: string;
    time?: string;
    date: number;
  }

export interface foreCast {
    description: string;
    icon: string;
    temp: number;
    city: string;
    day?: number;
    date: number;
  }

  export interface weatherBlend {
    weatherType: weatherType;
    foreCast: foreCast[];
  }

  export interface foursquareType {
    name: string;
    cat: string;
    coords: coords;
    address: string;
    icon: string;
  }
